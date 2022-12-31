import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import AWS from 'aws-sdk'
import cors from 'cors'
import path from 'path'
import fileUpload from 'express-fileupload'

import authRouter from "./router/auth-router.js"
import tagRouter from "./router/tag-router.js"
import categoryRouter from "./router/сategory-router.js"
import productRouter from "./router/product-router.js"
import orderRouter from "./router/order-router.js"
const __dirname = path.resolve()


const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,                                                     // разрешаем кукки
    origin: true                                                          // URL нашего фронтенда
}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/auth', authRouter)
app.use('/tag', tagRouter)
app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `*`)
    next()
})


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
})

export default s3


const start = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGODB_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server working, PORT: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
