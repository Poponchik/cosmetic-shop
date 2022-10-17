import * as mongoose from 'mongoose';
export declare class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly category: mongoose.Schema.Types.ObjectId;
    readonly tags: string[];
    readonly image: string[];
}
