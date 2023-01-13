const mongoose = require('mongoose');
const slugify = require('slugify')
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
    slug: {
        type: String,
        unique: true,
    },
}, {timestamps: true});

entrySchema.pre('save', function(next){
    this.slug = slugify(this.header,{
        lower: true,
        strict: true,
    });
    next();
});


//Schema'yı modele çevirmek
const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;