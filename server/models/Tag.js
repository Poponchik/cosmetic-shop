import mongoose from "mongoose"





const Tag = new mongoose.Schema({
    name: {type: String, required: true}
})


export default mongoose.model('Tag', Tag)