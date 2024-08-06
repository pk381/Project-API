const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.authanticate = async (req, res, next)=>{

    try{
        let token = req.header('Authorization')
        const userObj = jwt.verify(token,'secretKey');
        const user = await User.findById(userObj.id);
        req.user = user;
        next();
    }
    catch(err){
        console.log(err);
    }
}