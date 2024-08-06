const Purchase = require('../models/purchase');
const Api = require('../models/api');
const Request = require('../models/request');
const Product = require('../models/product');


exports.getRequests = async (req, res, next)=>{
    try{
        const purchases = await Purchase.find({user_id: req.user._id, user_api_key: req.header("user_api_key")});

        console.log(purchases);

        const products = await Product.find();

        res.status(201).json(products)
    }
    catch(err){
        console.log(err);
    }
}
