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
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;