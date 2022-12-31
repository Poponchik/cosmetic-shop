import 'dotenv/config'
import Category from '../models/Category.js'
import Product from '../models/Product.js'
import filesService from '../service/file-service.js'

import path from 'path'
import fs from 'fs'
import util from 'util'
const __dirname = path.resolve()




class OrderController {
    async createOrder(req, res) {
        try {
            // const { categoryId } = req.params
            // const { name, description, price, tagsId } = req.body
            // const { images } = req.files
            // const fileName = await filesService.createFile(images)
            // const product = await Product.create({ name, description, price, tagsId, images: fileName, categoryId })
            // return res.json(product)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Create products error' + e })
        }
    }

    async getOrderById(req, res) {
        try {
            // const products = await Product.find()
            // return res.json(products)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Get products error' + e })
        }
    }




    // async createOrder(orderDto: CreateOrderDto, status, req) {
    //     let sum = 0
    //     const productIdsFromOrder = orderDto.products.map(product => product.productId)
    //     const products = await this.productService.find({ _id: { $in: productIdsFromOrder } })
    //     const priceObject: ObjectPrice = {}

    //     for (const product of products) {
    //         priceObject[product._id] = product.price
    //     }

    //     for (const product of orderDto.products) {
    //         const objectIdToString = String(product.productId)
    //         if (product.quantity < 1 || !objectIdToString) continue
    //         sum += priceObject[objectIdToString] * product.quantity
    //     }

    //     const authHeader = req.headers.authorization
    //     let userId
    //     let toMailer = {
    //         to: orderDto.email,
    //         subject: 'Ваш заказ в магазине COSMETIC-SHOP',
    //         from: 'grxo48et@ukr.net',
    //         html: '<h1>order</h1>'
    //     }

    //     if (authHeader) {
    //         const token = authHeader.split(' ')[1]
    //         const { email } = this.jwtService.verify(token)
    //         userId = (await this.userService.getUserByEmail(email))._id
    //         await clearHash(userId)
    //     }

    //     const order = await this.orderModel.create({ ...orderDto, status, totalPrice: sum, userId })
    //     toMailer.html = `<h4>
    //     Ваш адрес: ${order.address}<br>
    //     Статус заказа: ${order.status}<br>
    //     Сумма заказа: ${order.totalPrice}грн.
    //     </h4>`
    //     // await this.mailerService.send(toMailer)
    //     return order
    // }



    // async getOrderById(userId: string) {
    //     const orders = await cache(this.orderModel.find({ userId }), userId)
    //     return orders
    // }

}

export default new OrderController()