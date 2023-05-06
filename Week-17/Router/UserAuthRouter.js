const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const CookieParser = require('cookie-parser');
const User = require('../Model/UserSchema');
router.use(CookieParser());

router.get('/', async (req, res) => {
    console.log(req);
});

router.post('/register', async (req,res) => {

    const { firstName, lastName, email, password} = req.body;
    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            code: 400,
            message: "One or more properties are missing"
        });
    }
    const userExist = await User.findOne({email:email});

    if(userExist) {
        return res.status(409).json({
            code: 409,
            message: "User already exists!"
        });
    } else {
        const user = new User({ firstName, lastName, email, password });
        await user.save();
        res.status(201).json({
            code: 201,
            message: "User successfully registered!"
        });
    }
});

router.post('/login', async (req,res) => {
    
    let token;
    const { email, password } = req.body;

    if( !email || !password) {
        return res.status(400).json({
            code: 400,
            message: "Both email and password are required parameters!"
        });
    }

    const userLogin = await User.findOne({email:email});

    if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);

        token = await userLogin.generateUserAuthToken();

        res.cookie("jwtoken", token, {
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        });

        if (!isMatch) {
            return res.status(400).json({
                code: 400,
                message: "Invalid User Id or Password!"
            });
        } else {
            res.status(200).json(userLogin);
        }
    } else {
        return res.status(404).json({
            code: 404,
            message: "User not found!"
        });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send({
        code: 200, message: "User Logged Out!"
    });
});

module.exports = router;