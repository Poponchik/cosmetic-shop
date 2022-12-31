import 'dotenv/config'
import Category from '../models/Category.js'
import Product from '../models/Product.js'
import filesService from '../service/file-service.js'

import path from 'path'
import fs from 'fs'
import util from 'util'
const __dirname = path.resolve()




class CategoryController {
    async createCategory(req, res) {
        try {
            const { name, description } = req.body
            const category = await Category.create({ name, description })
            return res.json(category)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Create category error' + e })
        }
    }

    async getAllCategory(req, res) {
        try {
            const category = await Category.find()
            return res.json(category)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Get category error' + e })
        }
    }

    async deleteCategory(req, res) {
        try {
            let images = []
            const { categoryId } = req.params
            const products = await Product.find({ categoryId })
            for (let i = 0; i < products.length; i++) {
                images = [...images, ...products[i].images]
            }
            await filesService.deleteFiles(images)
            await Product.deleteMany({ categoryId })
            await Category.deleteOne({ _id: categoryId })
            return res.json(`Category ${categoryId} deleted`)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Delete category error' + e })
        }
    }


    async changeCategory(req, res) {
        try {
            const { id } = req.params
            const { name, description } = req.body
            const category = await Category.findOneAndUpdate({ id }, { '$set': { name, description } }, { new: true })
            return res.json(category)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Change category error' + e })
        }
    }


}

export default new CategoryController()