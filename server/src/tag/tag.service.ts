import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { CreateTagDto } from './dto/create-tag.dto'
import { Tag, TagDocument } from './tag.schema'


@Injectable()
export class TagService {

    constructor(@InjectModel(Tag.name) private tagModel: Model<TagDocument>) { }


    async createTag(TagDto: CreateTagDto) {
        const tag = await this.tagModel.create({ name: TagDto.name })
        return tag
    }

    async getAllTags() {
        const tag = await this.tagModel.find()
        return tag
    }

    async deleteTag(_id: string) {
        await this.tagModel.deleteOne({ _id })
        return 'Remove ' + _id
    }

    async changeTag(TagDto: CreateTagDto, _id: string) {
        const tag = await this.tagModel.findOneAndUpdate({ _id }, { '$set': TagDto }, { new: true })
        return tag
    }

}
