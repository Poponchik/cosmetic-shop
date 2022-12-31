import Tag from '../models/Tag.js'


class TagController {
    async createTag(req, res) {
        try {
            const { name } = req.body
            const tag = await Tag.create({ name })
            return res.json(tag)
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Create error' })
        }
    }

    async getAllTags(req, res) {
        try {
            const tag = await Tag.find()
            return res.json(tag)
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'get error' })
        }
    }

    async deleteTag(req, res) {
        try {
            const { id } = req.params
            await Tag.deleteOne({ id })
            return res.json({ message: `${id} delete` })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'delete error' })
        }
    }
    
    async changeTag(req, res) {
        try {
            const { id } = req.params
            const name = req.body
            const tag = await Tag.findOneAndUpdate({ id }, { '$set': name }, { new: true })
            return res.json(tag)
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'change error' })
        }
    }
}



export default new TagController()
