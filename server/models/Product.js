import mongoose from "mongoose"





const Product = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    tagsId: { type: [mongoose.Schema.Types.ObjectId], ref: "Tag", required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    price: { type: Number, required: true }

})


export default mongoose.model('Product', Product)
