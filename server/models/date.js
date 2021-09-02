const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema({
    prev: {
        type: Date,
        required: false
    },
    current: {
        type: Date,
        required: false,
        default: Date.now()
    }
});

module.exports = mongoose.Model('Date', dateSchema);