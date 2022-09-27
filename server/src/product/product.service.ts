import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.schema'
import { CreateProductDto } from './dto/create-product.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'








@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }


    async createProducts(dto: CreateProductDto) {
        console.log('dto::', dto)
        const products = await this.productModel.create(dto)
        return products
    }


    async getAllProducts() {
        const products = await this.productModel.find()
        return products
    }
    async getOneProductsId(id: string) {
        console.log('idd::', id)
        const products = await this.productModel.findOne({id})
        return products
    }
    async getProductsСategory(categoryProduct: Object) {
        const products = await this.productModel.find(categoryProduct)
        return products
    }


    async deleteProduct(_id: string) {
        await this.productModel.deleteOne({_id})
        return 'Remove ' + _id
    }


    async changeProduct(dto: CreateProductDto, _id: string) {
        console.log('dto::', dto)
        console.log('_id::', _id)
        await this.productModel.findOneAndUpdate({ _id }, { "$set": dto }, { new: true })
        return dto
    }



}
