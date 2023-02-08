//// IMPORT DEPENDENCIES ////

const mongoose = require('mongoose')

//// SCHEMA ////

const actorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    isGoodAtActing: {
        type: Boolean, 
        default: true
    },
    list: {
        type: String,
        enum: ['A', 'B', 'C+'],
        default: 'B'
    }
}, { timestamps: true })

//// EXPORT ////

module.exports = actorSchema