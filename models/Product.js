import mongoose from "mongoose";

//schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
}, { timestamps: true })

//assign the schema to a mogoose model for interaction w db
const Product = mongoose.model('Product', productSchema)

export default Product;