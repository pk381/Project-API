const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Demo = new Schema({
    demo:{
        type: String
    }
});

module.exports = mongoose.model('demo', Demo);