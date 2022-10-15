import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type OrderProductsDocument = OrderProducts & Document;
export declare class OrderProducts {
    userId: mongoose.Schema.Types.ObjectId;
    email: string;
    numberPhone: string;
    status: string;
    address: string;
    totaAmount: number;
    timestamp: string;
    products: string[];
}
export declare const ProductsInOrderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    [x: string]: any;
}>;
