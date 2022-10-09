import { Injectable } from '@nestjs/common'
import { Order, OrderDocument } from './order.schema'
import { CreateOrderDto } from './dto/create-order.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
// import { Role } from './product.controller'
import { Status } from '../shared/index'
// import { productModel } from '../shared/index'
import { ProductService } from '../product/product.service'
import { Product, ProductDocument } from '../product/product.schema'


@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        private productModel: ProductService
        ) { }







    // async createOrder(dto: CreateOrderDto, status) {
        // let sum = 0
        // dto.products.map((product) => console.log(product))
        // console.log(dto.products[0].quantity)
        // this.productModel.find(el => console.log(el))
        // dto.products.map(() => {})
        // dto.products.map((product) => {
        //     sum += this.productModel.find(el => el._id == product.productsId)
        //     this.productModel.find(el => console.log(el))
        // })




        
        // const order = await this.orderModel.create({ ...dto, status })
        // return order
    // }

    // console.log(q2)


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

