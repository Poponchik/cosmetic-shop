import Router from "express"
import orderController from "../controllers/order-controler.js"
import authMiddleware from '../middlewares/auth-middleware.js'
const orderRouter = new Router()



orderRouter.post('/createOrder/', orderController.createOrder)

orderRouter.get('/orders/', orderController.getOrderById)



export default orderRouter