import Router from "express"
import categoryController from "../controllers/сategory-controler.js"
import authMiddleware from '../middlewares/auth-middleware.js'
const categoryRouter = new Router()



categoryRouter.post('/createCategory/', categoryController.createCategory)

categoryRouter.get('/categoryAll/', categoryController.getAllCategory)

categoryRouter.delete('/deleteCategory/:categoryId', categoryController.deleteCategory)

categoryRouter.post('/changeCategory/:id', categoryController.changeCategory)





export default categoryRouter