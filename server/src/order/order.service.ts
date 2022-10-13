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

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(Product.name) private productService: Model<ProductDocument>,
        private jwtService: JwtService,
        private userService: UsersService) { }







    async createOrder(dto: CreateOrderDto, status, req) {


        let sum: number = 0
        const productsId = dto.products.map(product => product.productId)
        const response = await this.productService.find({ _id: { $in: productsId } })

        for (let i = 0; i < response.length; i++) {
            for (let n = 0; n < dto.products.length; n++) {
                if (response[i]._id.equals(dto.products[n].productId)) {
                    sum += +response[i].price * dto.products[n].quantity
                }
            }
        }

        const authHeader = req.headers.authorization
        if (authHeader) {
            const token = authHeader.split(' ')[1]
            const { email } = this.jwtService.verify(token)
            var { _id } = await this.userService.getUserByEmail(email)
        }

        const order = await this.orderModel.create({ ...dto, status, totalAmount: sum, userId: _id })
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

