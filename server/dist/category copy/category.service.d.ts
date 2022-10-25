import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category, CategoryDocument } from './category.schema';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    createCategory(CategoryDto: CreateCategoryDto): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllCategory(): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteCategory(_id: string): Promise<string>;
    changeCategory(dto: CreateCategoryDto, _id: string): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
