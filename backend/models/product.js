const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String
    },
    brand:{
        type: String,
    },
    price:{
        type: String
    },
    price_sign:{
        type: String
    },
    currency:{
        type: String
    },
    image_link:{
        type: String
    },
    rating:{
        type: String
    },
    category:{
        type: String
    },
    product_type:{
        type: String
    }
    
});

module.exports = mongoose.model('product', Product);