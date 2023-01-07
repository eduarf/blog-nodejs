const Entry = require('../models/Entry');

exports.createEntry = async(req, res) => {
    try {
        const entry = await Entry.create(req.body);
        res.status(201).json({
            status: 'success',
            entry
        });
    }
    catch(error){
        // 400 --> bad request
        res.status(400).json({
            status: 'fail',
            error
        });
    }
};