import { ProductService } from './product.service';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProducts(ProductDto: CreateProductDto, categoryId: string, images: any): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllProducts(): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOneProductsId(id: string): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getProductsСategory(categoryId: string): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    deleteProduct(id: string): Promise<string>;
    changeProduct(ProductDto: CreateProductDto, id: string, images: any): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
