const Purchase = require('../models/purchase');

exports.checkPurchase = async (req, res, next) => {

    try {
        const purchases = await Purchase.find({ user_id: req.user._id, user_api_key: req.header("user_api_key") });

        req.purchase = purchases[0];

        if (purchases.length === 0) {
            res.status(201).json({ message: "wrong api key" });

        }
        else if (purchases[0].hit_count > 5000) {
            res.status(201).json({ message: "hit count increased the limit" });
        }
        else if (purchases[0].end_date > Date()) {
            res.status(201).json({ message: "hit count increased the limit" });
        }
        next();

    }
    catch (err) {
        console.log(err);
    }

}