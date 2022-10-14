import { Injectable } from '@nestjs/common'
import { Order, OrderDocument } from './order.schema'
import { Product, ProductDocument } from '../product/product.schema'

import { CreateOrderDto } from './dto/create-order.dto'


import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
// import { Role } from './product.controller'
// import { productModel } from '../shared/index'
import { ProductService } from '../product/product.service'
// import { IProducts } from './dto/create-order.dto'
import { JwtService } from '@nestjs/jwt'

import { UsersService } from 'src/users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { ObjectPrice } from 'src/shared'

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(Product.name) private productService: Model<ProductDocument>,
        private jwtService: JwtService,
        private userService: UsersService) { }

    async createOrder(orderDto: CreateOrderDto, status, req) {
        let sum = 0
        const productIdsFromOrder = orderDto.products.map(product => product.productId)
        const products = await this.productService.find({ _id: { $in: productIdsFromOrder } })
        const priceObject: ObjectPrice = {}

        for(const product of products) {
            priceObject[product._id] = product.price
        }

        for(const product of orderDto.products) {
            const objectIdToString = String(product.productId)
            if(product.quantity < 1 || !objectIdToString) continue
            sum += priceObject[objectIdToString] * product.quantity
        }

        const authHeader = req.headers.authorization
        let userId
        if (authHeader) {
            const token = authHeader.split(' ')[1]
            const { email } = this.jwtService.verify(token)
            userId = (await this.userService.getUserByEmail(email))._id
        }

        const order = await this.orderModel.create({ ...orderDto, status, totalPrice: sum, userId })
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

