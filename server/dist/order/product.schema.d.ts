import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from '../category/category.schema';
export declare type ProductDocument = Product & Document;
export declare class Product {
    userId: mongoose.Schema.Types.ObjectId;
    name: string;
    description: string;
    category: Category;
    tags: string[];
    images: string[];
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, any>, {}, {}, {}, {}, "type", Product>;
