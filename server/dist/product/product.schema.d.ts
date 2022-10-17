import { Document } from 'mongoose';
import { Category } from '../category/category.schema';
import * as mongoose from 'mongoose';
export declare type ProductDocument = Product & Document;
export declare class Product {
    categoryId: Category;
    name: string;
    description: string;
    tags: string[];
    images: string[];
    price: number;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, any>, {}, {}, {}, {}, "type", Product>;
