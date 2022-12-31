import Router from "express"
import tagController from "../controllers/tag-сontroller.js"
import authMiddleware from '../middlewares/auth-middleware.js'
const tagRouter = new Router()



tagRouter.post('/createTags/', tagController.createTag)

tagRouter.get('/tagAll/', tagController.getAllTags)

tagRouter.delete('/deleteTag/:id', tagController.deleteTag)

tagRouter.post('/changeTag/:id', tagController.changeTag)



export default tagRouter