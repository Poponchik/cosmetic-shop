import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type OrderDocument = Order & Document;
export declare class Order {
    userId: mongoose.Schema.Types.ObjectId;
    email: string;
    numberPhone: string;
    status: string;
    address: string;
    totaAmount: number;
    timestamp: string;
    products: string[];
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, any>, {}, {}, {}, {}, "type", Order>;
