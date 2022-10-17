import * as mongoose from 'mongoose';
export declare type ProductsInOrderDocument = ProductsInOrder & Document;
export declare class ProductsInOrder {
    quantity: number;
    productId: mongoose.Schema.Types.ObjectId;
}
