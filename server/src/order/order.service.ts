import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { JwtService } from '@nestjs/jwt'

import { CreateOrderDto } from './dto/create-order.dto'
import { Order, OrderDocument } from './order.schema'
import { Product, ProductDocument } from '../product/product.schema'
import { UsersService } from '../users/users.service'
import { MailerService } from '../mailer/mailer.service'
import { ObjectPrice } from '../shared'


@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(Product.name) private productService: Model<ProductDocument>,
        private jwtService: JwtService,
        private userService: UsersService,
        private mailerService: MailerService,
    ) { }


    async createOrder(orderDto: CreateOrderDto, status, req) {
        let sum = 0
        const productIdsFromOrder = orderDto.products.map(product => product.productId)
        const products = await this.productService.find({ _id: { $in: productIdsFromOrder } })
        const priceObject: ObjectPrice = {}

        for (const product of products) {
            priceObject[product._id] = product.price
        }

        for (const product of orderDto.products) {
            const objectIdToString = String(product.productId)
            if (product.quantity < 1 || !objectIdToString) continue
            sum += priceObject[objectIdToString] * product.quantity
        }

        const authHeader = req.headers.authorization
        let userId
        let toMailer = {
            to: 'mail',
            subject: 'Ваш заказ в магазине COSMETIC-SHOP',
            from: 'grxo48et@ukr.net',
            html: '<h1>order</h1>'
        }

        if (authHeader) {
            const token = authHeader.split(' ')[1]
            const { email } = this.jwtService.verify(token)
            toMailer.to = email
            userId = (await this.userService.getUserByEmail(email))._id
        }

        const order = await this.orderModel.create({ ...orderDto, status, totalPrice: sum, userId })
        toMailer.html = `<h4>
        Ваш адрес: ${order.address}<br>
        Статус заказа: ${order.status}<br>
        Сумма заказа: ${order.totalPrice}грн.
        </h4>`
        await this.mailerService.send(toMailer)
        return order
    }



    async getOrderById(userId: string) {
        //@ts-ignore
        const orders = await this.orderModel.find({ userId }).cache({key: userId})
        return orders
    }
}

