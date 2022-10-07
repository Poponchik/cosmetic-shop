import { Injectable } from '@nestjs/common'
import { Order, OrderDocument } from './order.schema'
import { CreateOrderDto } from './dto/create-order.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
// import { Role } from './product.controller'



@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async createOrder(dto: CreateOrderDto, userId: string) {

        const order = await this.orderModel.create({ ...dto })
        return order
    }


    // async getAllProducts() {
    //     const products = await this.orderModel.find()
    //     return products
    // }
    // async getOneProductsId(_id: string) {
    //     const products = await this.orderModel.findById({ _id })
    //     return products
    // }

    // async getProductsСategory(categoryId: string) {
    //     const products = await this.orderModel.find({ category: categoryId })
    //     return products
    // }

    // async deleteProduct(_id: string) {
    //     const { images } = await this.orderModel.findById(_id)
    //     images.forEach((image) => {
    //         fs.rm(path.resolve(__dirname, '..', `static/${image}`), (err) => { })
    //     })
    //     await this.orderModel.deleteOne({ _id })
    //     return 'Remove ' + _id
    // }


    // async changeProduct(dto: CreateProductDto, _id: string, images: any) {
    //     const response = await this.orderModel.findById(_id)
    //     response.images.forEach((image) => {
    //         fs.rm(path.resolve(__dirname, '..', `static/${image}`), (err) => { })
    //     })
    //     const fileName = await this.fileService.createFile(images)
    //     const products = await this.orderModel.findOneAndUpdate({ _id }, { '$set': dto, images: fileName }, { new: true })
    //     return products
    // }


}

