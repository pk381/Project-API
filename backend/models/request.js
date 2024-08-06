const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Request = new Schema({
    request_type: {
        type: String
    },
    request:{
        type: String
    }
});

module.exports = mongoose.model('Request', Request);