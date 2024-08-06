const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Api = new Schema({
    base_url: {
        type: String
    }
});

module.exports = mongoose.model('Api', Api);