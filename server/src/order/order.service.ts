import { Injectable } from '@nestjs/common'
import { Order, OrderDocument } from './order.schema'
import { Product, ProductDocument } from '../product/product.schema'

import { CreateOrderDto } from './dto/create-order.dto'


import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
// import { Role } from './product.controller'
// import { productModel } from '../shared/index'
import { ProductService } from '../product/product.service'
import { IProducts } from './dto/create-order.dto'
import { JwtService } from '@nestjs/jwt'

import { UsersService } from 'src/users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto'

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(Product.name) private productService: Model<ProductDocument>,
        private jwtService: JwtService,
        private userService: UsersService) { }







    async createOrder(dto: CreateOrderDto, userDto: CreateUserDto, status, req) {




        // let sum = 0
        let productsId = dto.products.map(product => product.productId)
        // let allArr = dto.products.map((el) => Object.values(el))
        let quantity = dto.products.map(product => product.quantity)
        
        // console.log('dto.products::', dto.products)
        // console.log('allArr::', allArr)
        // console.log('productId::', productsId)
        // console.log('quantity::', quantity)
        const response = await this.productService.find({ _id: { $in: productsId } })
        // const allArr = response.map((el) => el._id: 'string')




        // console.log('response::', response[0]._id + '')
        // const allArr2 = response.map((el) => el._id + '')


        for (let i = 0; i < response.length; i++) {
            response[i]
        //     for (let i = 0; i < dto.products.length; i++) {
        //         // if (response[i].includes(dto.products[i]) {
        //         // //     // if (dto.products.productsId === response._id[i]) {
        //         //     allArr[i] = {
        //         //         sum: +response[i].price
        //         //     }
        //         // //     // sum += response[i].price * +quantity[i]
        //         // }


        //     }


        }

        // console.log('allArr::', allArr)
        // console.log('allArr2::', allArr2)


        // const authHeader = req.headers.authorization
        // const bearer = authHeader.split(' ')[0]
        // const token = authHeader.split(' ')[1]

        // if (bearer === 'Bearer' || token) {
        //     const user = this.jwtService.verify(token)
        //     const candidate = await this.userService.getUserByEmail(user.email)
        //     // console.log('user::', user.email)
        //     // console.log('user::', userDto.email)
        //     console.log('candidate::', candidate._id)
        // }








        // const order = await this.orderModel.create({ ...dto, status, totaAmount: sum, userId: candidate._id })
        // const order = await this.orderModel.create({ ...dto, status, totaAmount: sum })
        // return order

    }

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

