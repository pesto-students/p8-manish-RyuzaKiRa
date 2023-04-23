const jwt = require('jsonwebtoken');
const User = require("../Model/UserSchema");



const Authenticate = async (req, res, next) => {
    try {
            const token = req.cookies.jwtoken;
            if(!token){
                return res.status(403).json({
                    code: 403,
                    message: "Unauthorized user!"
                });
            }
            const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await User.findOne({_id:verifiedToken.id, token: token });
            if(!rootUser){
                return res.status(400).end({
                    code: 400,
                    message: "User not found!"
                });
            }
            req.token=token;
            req.rootUser=rootUser;
            next();

    }catch(err){
            res.status(400).json({
                code: 400,
                message: err
            });
    }
}

module.exports = Authenticate