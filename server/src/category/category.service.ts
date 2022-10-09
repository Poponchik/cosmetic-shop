import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateCategoryDto } from './dto/create-category.dto'
import { Category, CategoryDocument } from './category.schema'
import { Model } from 'mongoose'


@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) { }


    async createCategory(CategoryDto: CreateCategoryDto) {
        const category = await this.categoryModel.create({ name: CategoryDto.name })
        return category
    }

    async getAllCategory() {
        const category = await this.categoryModel.find()
        return category
    }

    async deleteCategory(_id: string) {
        await this.categoryModel.deleteOne({ _id })
        return 'Remove ' + _id
    }

    async changeCategory(dto: CreateCategoryDto, _id: string) {
        const category = await this.categoryModel.findOneAndUpdate({ _id }, { '$set': dto }, { new: true })
        return category
    }

}
