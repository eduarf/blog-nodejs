const Entry = require('../models/Entry');

exports.createEntry = async(req, res) => {
    try {
        console.log(req.body);
        const entry = await Entry.create(req.body);
        res.status(201).redirect('/entry');
    }
    catch(error){
        // 400 --> bad request
        res.status(400).json({
            status: 'fail',
            error
        });
    }
};

exports.getAllEntries = async(req, res) => {
    try {
        const entries = await Entry.find();
        res.status(200).render('entries', {
            page_name: 'entries',
            entries
        });
    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            error
        });
    }
};

exports.getEntry = async(req,res) => {
    try {
        const entry = await Entry.findOne({slug: req.params.slug});
        res.status(200).render('entry',{
            page_name: 'entry',
            entry
        });
    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};