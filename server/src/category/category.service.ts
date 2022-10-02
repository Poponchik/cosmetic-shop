import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { CreateCategoryDto } from "./dto/create-category.dto"
import { Category, CategoryDocument } from './category.schema'
import { Model } from 'mongoose'


@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) { }


    async createCategory(categoryId: string) {
        const category = await this.categoryModel.create({ name: categoryId })
        return category
    }

    async getAllCategory() {
        const category = await this.categoryModel.find()
        return category
    }
    // async getOneCategoryId(_id: string) {
    //     const category = await this.categoryModel.findById({_id})
    //     return category
    // }


    async deleteCategory(_id: string) {
        console.log("deleteCategory", _id)
        await this.categoryModel.deleteOne({ _id })
        return 'Remove ' + _id
    }


    async changeCategory(dto: CreateCategoryDto, _id: string) {
        const category = await this.categoryModel.findOneAndUpdate({ _id }, { "$set": dto }, { new: true })
        return category
    }

}
