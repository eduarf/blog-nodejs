const User = require('../models/User');
const bcrypt = require('bcrypt');


exports.createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).redirect('/login');
    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            error
        });
    }
};

exports.loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;
        let user = await User.findOne({email});
        let same = await bcrypt.compare(password, user.password);
        if(same){
            req.session.userID = user._id;
            res.status(200).redirect('/entry');
        }
        else {
            res.send('you are not logged in');
        }
        
    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            error
        });
    }
};

exports.logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};





