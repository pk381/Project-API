const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const User = require('../models/user');

function generateToken(id){
  return jwt.sign({id: id}, 'secretKey');
}

exports.postLogin = async (req, res, next) => {
  try {

    const user = await User.find({email: req.body.email});

    if (user.length === 0) {
      res.status(401).json({ message: "user not exist" });
    } else{

        bcrypt.compare(req.body.password, user[0].password, async (err, result)=>{

            if(err != undefined){
              console.log("controller/user/postlogin", err);
            }
            
            if(result === true){
                res.status(201).json({message: "login successfully",userName: user[0].name, token: generateToken(user[0]._id)});
            }
            else{
                res.status(401).json({message: "password did not match"});
            }
        })

    }
  } catch (err) {
    console.log(err);
  }
};

exports.postSignUp = async (req, res, next) => {
  try {
    const isUser = await User.find({email: req.body.email});

    if (isUser.length === 0) {

        bcrypt.hash(req.body.password, 10, async (err, hash)=>{

            console.log("Error controllers/user/postSignup",err);

            let user = new User({
              name: req.body.name, 
              email: req.body.email,
              password: hash,
              isPremiumUser: false,
              totalExpense: 0
            });
            user = await user.save();
            res.status(201).json({message: "userCreated", user: user });
        })
    } else {
      res.status(403).json({ message: "userExist" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.addAPI = async (req,res, next)=>{

  try{
    console.log(req.body)
  }
  catch(err){
    console.log(err)
  }
}