const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');


function verifyToken(req,res,next){
    if(
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT" 
    ){
        jwt.verify(
            req.headers.authorization.split(" ")[1],
            'SECRET', 
            async function(err,verifiedToken){
                if(err){
                    return res.status(404).json({msg: "TOKEN INVALID"})
                }
                // console.log(verifiedToken.id);
                let userData = await UserModel.findById(verifiedToken.id);
                req.user = userData;
                next();
            }
        )
    }
    else{
        return res.status(404).json({msg: "TOKEN not found"})
    }
}

module.exports = verifyToken;