import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.schema'
import { CreateProductDto } from './dto/create-product.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { FilesService } from '../files/files.service';








@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
        private fileService: FilesService) { }


    async createProducts(dto: CreateProductDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const products = await this.productModel.create({ ...dto, image: fileName })
        return products
    }


    async getAllProducts() {
        const products = await this.productModel.find()
        return products
    }
    async getOneProductsId(id: string) {
        const products = await this.productModel.findById(id)
        return products
    }

    async getProductsСategory(categoryId: string) {
        const products = await this.productModel.find({ category: categoryId })
        return products
    }

    async deleteProduct(_id: string) {
        await this.productModel.deleteOne({ _id })
        return 'Remove ' + _id
    }


    async changeProduct(dto: CreateProductDto, _id: string) {
        console.log('dto::', dto)
        console.log('_id::', _id)
        await this.productModel.findOneAndUpdate({ _id }, { "$set": dto }, { new: true })
        return dto
    }



}
