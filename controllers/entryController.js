const Entry = require('../models/Entry');

exports.createEntry = async(req, res) => {
    const entry = await Entry.create(req.body);
    try {
        res.status(201).json({
            status: 'success',
            entry
        });
    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            error
        });
    }
};