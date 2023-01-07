const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    header: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
}, {timestamps: true});

//Schema'yı modele çevirmek
const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;