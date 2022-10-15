import * as mongoose from 'mongoose';
export declare class CreateOrderDto {
    readonly products: CreateProductsInOrderDto[];
    readonly userId: mongoose.Schema.Types.ObjectId;
    readonly numberPhone: string;
    readonly address: string;
    readonly email: string;
    readonly status: string;
    readonly timestamp: string;
    readonly totalPrice: number;
}
export declare class CreateProductsInOrderDto {
    readonly quantity: number;
    readonly productId: mongoose.Schema.Types.ObjectId;
}
