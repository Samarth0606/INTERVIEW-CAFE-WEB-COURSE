const UserModel = require("../models/User.model");
const bcrypt = require('bcrypt');

async function register(req,res){
    try{
        let {name,email,password} = req.body;
        let userData = await UserModel.findOne({email});
        if(userData){
            return res.status(401).json("user already exists")
        }
        else{
            let newuser = await UserModel.create({
                name,
                email,
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json(newuser)
        }
    }
    catch(err){
        return res.status(403).json("unable to create user")
    }
    
}
async function login(req,res){
    try{
        let {email,password} = req.body;
        let userData = await UserModel.findOne({email});
        if(!userData){
            return res.status(401).json("user doesnot exists")
        }
        else{
            let validatedPass = bcrypt.compareSync(password, userData.password);
            if(!validatedPass){
                return res.status(403).json("Invalid creds")
            }
            else{
                return res.status(401).json({
                    data:{
                        name: userData.name,
                        email: userData.email
                    },
                    // token: token
                })
            }
    
        }
    }
    catch(err){
        return res.status(403).json("unable to login user")
    }
}

module.exports = {register , login}