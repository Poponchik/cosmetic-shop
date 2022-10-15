import { CategoryService } from './category.service';
import { Category } from './category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    createCategory(CategoryDto: CreateCategoryDto): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllCategory(): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteCategory(id: string): Promise<string>;
    changeCategory(CategoryDto: CreateCategoryDto, id: string): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
