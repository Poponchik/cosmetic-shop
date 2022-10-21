import { TagService } from './tag.service';
import { Tag } from './tag.schema';
import { CreateTagDto } from './dto/create-tag.dto';
export declare class TagController {
    private tagService;
    constructor(tagService: TagService);
    createTags(TagDto: CreateTagDto): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllTags(): Promise<(Tag & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteTag(id: string): Promise<string>;
    changeTag(TagDto: CreateTagDto, id: string): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
