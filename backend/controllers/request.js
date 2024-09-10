const Api = require('../models/api');
const Product = require('../models/product');
const Request = require('../models/request');

exports.getAll = async (req, res, next) => {
    try {

        if (req.purchase != null) {
            req.purchase.hit_count += 1;
            await req.purchase.save();
            const products = await Product.find();
            res.status(201).json({ message: "Success", products: products })
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.getByName = async (req, res, next) => {
    try {

        if (req.purchase != null) {
            req.purchase.hit_count += 1;
            await req.purchase.save();
            const products = await Product.find({ name: { $regex: req.params.name, $options: 'i' } });
            res.status(201).json({ message: "Success", products: products })
        }

    }
    catch (err) {
        console.log(err);
    }
}

exports.getByID = async (req, res, next) => {
    try {
        if (req.purchase != null) {
            req.purchase.hit_count += 1;
            await req.purchase.save();
            const products = await Product.find({ _id: req.params.id });
            res.status(201).json({ message: "Success", products: products })
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.getByCategory = async (req, res, next) => {
    try {

        if (req.purchase != null) {
            req.purchase.hit_count += 1;
            await req.purchase.save();
            const products = await Product.find({ category: req.params.category });
            res.status(201).json({ message: "Success", products: products })
        }
    }
    catch (err) {
        console.log(err);
    }
}