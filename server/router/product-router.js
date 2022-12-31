import Router from "express"
import productController from "../controllers/product-controller.js"
import authMiddleware from '../middlewares/auth-middleware.js'
const productRouter = new Router()



productRouter.post('/createProduct/:categoryId', productController.createProducts)

productRouter.get('/productsAll/', productController.getAllProducts)

productRouter.get('/product/:id', productController.getOneProductsId)

productRouter.get('/productsCategory/:categoryId', productController.getProductsСategory)

productRouter.get('/productsTag/:tagId', productController.getProductsСategory)

productRouter.delete('/deleteProduct/:_id', productController.deleteProduct)

productRouter.post('/changeProduct/:_id', productController.changeProduct)







// productRouter.post('/deleteAndMove/:id', productController.deleteAndMove)



export default productRouter