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

    

    async getOrderById(userId: string) {
        const orders = await this.orderModel.find( {userId} )
        return orders
    }
}

