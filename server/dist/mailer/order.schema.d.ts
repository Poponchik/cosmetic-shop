import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ProductsInOrder } from './productsInOrder.schema';
export declare type OrderDocument = Order & Document;
export declare class Order {
    userId: mongoose.Schema.Types.ObjectId;
    email: string;
    numberPhone: string;
    status: string;
    address: string;
    totalPrice: number;
    timestamp: string;
    products: [ProductsInOrder];
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, any>, {}, {}, {}, {}, "type", Order>;
