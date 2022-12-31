import mongoose from "mongoose"





const Order = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    numberPhone: { type: String, required: true },
    status: { type: String, required: true },
    address: { type: String, required: true },
    totalPrice: { type: number, required: true },
    timestamp: { type: Date, default: Date.now },

    products: {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: number, required: true },
    }
})



export default mongoose.model('Order', Order)



