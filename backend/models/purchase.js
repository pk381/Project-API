const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Purchase = new Schema({
    api_id: {
        type: Schema.Types.ObjectId,
        ref: "purchase",
        require: true
    },
    user_api_key: {
        type: String,
        require: true
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    hit_count: {
        type: Number
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: true
    }

});

module.exports = mongoose.model('purchase', Purchase);