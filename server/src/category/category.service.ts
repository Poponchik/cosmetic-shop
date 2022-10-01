import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { CreateCaterogyDto } from "./dto/create-category.dto"
import { Caterogy, CaterogyDocument } from './category.schema'
import { Model } from 'mongoose'


@Injectable()
export class CaterogyService {

    constructor(@InjectModel(Caterogy.name) private caterogyModel: Model<CaterogyDocument>) { }


    async createCategory(CaterogyId: string) {
        console.log(CaterogyId)


        const category = await this.caterogyModel.create({ name: CaterogyId })
        return category
    }

    async getAllCaterogy() {
        const category = await this.caterogyModel.find()
        return category
    }
    // async getOneCaterogyId(_id: string) {
    //     const category = await this.caterogyModel.findById({_id})
    //     return category
    // }


    async deleteCaterogy(_id: string) {
        await this.caterogyModel.deleteOne({ _id })
        return 'Remove ' + _id
    }


    async changeCaterogy(dto: CreateCaterogyDto, _id: string) {
        const category = await this.caterogyModel.findOneAndUpdate({ _id }, { "$set": dto }, { new: true })
        return category
    }

}
