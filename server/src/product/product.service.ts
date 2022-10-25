import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as path from 'path'
import * as fs from 'fs'

import { Product, ProductDocument } from './product.schema'
import { CreateProductDto } from './dto/create-product.dto'
import { FilesService } from '../files/files.service'



@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
        private fileService: FilesService) { }

    async createProducts(dto: CreateProductDto, images: any, categoryId: string) {
        const fileName = await this.fileService.createFile(images)
        const product = await this.productModel.create({ ...dto, images: fileName, categoryId })
        return product
    }


    async getAllProducts() {
        const products = await this.productModel.find()
        return products
    }
    async getOneProductsId(_id: string) {
        const product = await this.productModel.findById({ _id })
        return product
    }

    async getProductsСategory(categoryId: string) {
        const products = await this.productModel.find({ category: categoryId })
        return products
    }

    async deleteProduct(_id: string) {
        const { images } = await this.productModel.findById(_id)
        images.forEach((image) => {
            fs.rm(path.resolve(__dirname, '..', `static/${image}`), (err) => { })
        })
        await this.productModel.deleteOne({ _id })
        return 'Remove ' + _id
    }


    async changeProduct(dto: CreateProductDto, _id: string, images: any) {
        const response = await this.productModel.findById(_id)
        response.images.forEach((image) => {
            fs.rm(path.resolve(__dirname, '..', `static/${image}`), (err) => { })
        })
        const fileName = await this.fileService.createFile(images)
        const product = await this.productModel.findOneAndUpdate({ _id }, { '$set': dto, images: fileName }, { new: true })
        return product
    }


}

