const Purchase = require('../models/purchase');
const { v4: uuidv4 } = require('uuid')

exports.creatAPIKey = async (req, res, next) => {
    try {

        const startDate = new Date();
        const endDate = new Date(startDate); // Create a new Date object based on startDate
        endDate.setDate(startDate.getDate() + 30);

        let newPurchase = new Purchase({
            api_id: req.body.api_id,
            user_api_key: uuidv4(),
            start_date: startDate,
            end_date: endDate,
            hit_count: 0,
            user_id: req.user._id
        })

        newPurchase = await newPurchase.save();

        // console.log(newPurchase);

        res.status(201).json({ purchase: newPurchase })

    }
    catch (err) {
        console.log(err);
    }

}