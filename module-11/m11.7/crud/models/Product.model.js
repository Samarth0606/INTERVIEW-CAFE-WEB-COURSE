
// schmea = blueprint
const mongoose = require('mongoose')
// const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String
    }
});

// model = collection

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;

