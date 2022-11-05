import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as path from 'path'
import * as fs from 'fs'

import { CreateCategoryDto } from './dto/create-category.dto'
import { Category, CategoryDocument } from './category.schema'
import { cache, clearHash } from 'src/services/cache'
import { Product, ProductDocument } from '../product/product.schema'

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) { }


    async createCategory(CategoryDto: CreateCategoryDto) {
        const category = await (this.categoryModel.create({ name: CategoryDto.name }))
        return category
    }

    async getAllCategory() {
        const category = await cache(this.categoryModel.find())
        return category
    }

    async deleteCategory(categoryId: string) {
        let images = []
        const products = await this.productModel.find({ categoryId })
        for (let i = 0; i < products.length; i++) {
            images = [...images, ...products[i].images]
        }
        images.forEach((image) => {
            fs.rm(path.resolve(__dirname, '..', `static/${image}`), (err) => { })
        })
        await this.categoryModel.deleteOne({ _id: categoryId })
        await this.productModel.deleteMany({ categoryId })
        return 'Remove ' + categoryId
    }

    async changeCategory(dto: CreateCategoryDto, _id: string) {
        const category = await this.categoryModel.findOneAndUpdate({ _id }, { '$set': dto }, { new: true })
        clearHash('', false)
        return category
    }

}
