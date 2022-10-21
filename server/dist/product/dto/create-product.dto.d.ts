import * as mongoose from 'mongoose';
export declare class CreateProductDto {
    readonly categoryId: mongoose.Schema.Types.ObjectId;
    readonly tagsId: [mongoose.Schema.Types.ObjectId];
    readonly name: string;
    readonly description: string;
    readonly image: string[];
    readonly price: string;
}
