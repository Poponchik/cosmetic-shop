import { Model } from 'mongoose';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag, TagDocument } from './tag.schema';
export declare class TagService {
    private tagModel;
    constructor(tagModel: Model<TagDocument>);
    createTags(TagDto: CreateTagDto): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllTags(): Promise<(Tag & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteTag(_id: string): Promise<string>;
    changeTag(TagDto: CreateTagDto, _id: string): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
