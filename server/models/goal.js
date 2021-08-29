const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true,
        default: false
    },
    streak: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Goal', goalSchema);