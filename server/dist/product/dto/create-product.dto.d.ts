import * as mongoose from 'mongoose';
export declare class CreateProductDto {
    readonly categoryId: mongoose.Schema.Types.ObjectId;
    readonly name: string;
    readonly description: string;
    readonly tags: string[];
    readonly image: string[];
    readonly price: string;
}
