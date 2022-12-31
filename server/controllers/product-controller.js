import 'dotenv/config'
import mongoose from 'mongoose'
import Product from '../models/Product.js'
import filesService from '../service/file-service.js'

import path from 'path'
import fs from 'fs'
import util from 'util'
const __dirname = path.resolve()




class ProductController {

    async createProducts(req, res) {
        try {
            const { categoryId } = req.params
            const { name, description, price, tagsId } = req.body
            const { images } = req.files
            const fileName = await filesService.createFile(images)
            const product = await Product.create({ name, description, price, tagsId, images: fileName, categoryId })
            return res.json(product)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Create products error' + e })
        }
    }

    async getAllProducts(req, res) {
        try {
            const products = await Product.find()
            return res.json(products)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Get products error' + e })
        }
    }

    async getOneProductsId(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findById(id)
            return res.json(product)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Get one product error' + e })
        }
    }

    async getProductsСategory(req, res) {
        try {
            const categoryId = req.params
            const products = await Product.find(categoryId)
            return res.json(products)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Get one product by category error' + e })
        }
    }

    async getProductsСategory(req, res) {
        try {
            const { tagId } = req.params
            const products = await Product.find({ tagsId: tagId })
            return res.json(products)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Get one product by tag error' + e })
        }
    }

    async deleteProduct(req, res) {
        try {
            const { _id } = req.params
            const { images } = await Product.findById({ _id })
            await filesService.deleteFiles(images)
            await Product.deleteOne({ _id })
            return res.json({ message: `Remove ` + _id })

        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Get one product by tag error' + e })
        }
    }

    async changeProduct(req, res) {
        try {
            const { _id } = req.params
            const { name, description, price, tagsId, categoryId } = req.body
            // const response = await Product.findById(_id)
            // await filesService.deleteFiles(response.images)
            const { images } = req.files
            const fileName = await filesService.createFile(images)
            console.log('fileName:', fileName)
            // const product = await Product.create({ name, description, price, tagsId, images: fileName, categoryId })
            const product = await Product.findOneAndUpdate({ _id }, { '$set': name, description, price, tagsId, images: fileName, categoryId }, { new: true })
            console.log('product:', product)
            return res.json(product)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Change products error' + e })
        }
    }


    // async changeProduct(dto: CreateProductDto, _id: string, images: any) {
    //     const fileName = await this.fileService.createFile(images)
    //     await clearHash('', false)
    //     return product
    // }

}



export default new ProductController()
