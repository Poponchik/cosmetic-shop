import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesService } from '../files/files.service';
export declare class ProductService {
    private productModel;
    private fileService;
    constructor(productModel: Model<ProductDocument>, fileService: FilesService);
    createProducts(dto: CreateProductDto, images: any, categoryId: string): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllProducts(): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOneProductsId(_id: string): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getProductsСategory(categoryId: string): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteProduct(_id: string): Promise<string>;
    changeProduct(dto: CreateProductDto, _id: string, images: any): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
