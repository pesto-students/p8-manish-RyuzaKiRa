const express = require('express');
const uploadRouter = express.Router();
var fs = require('fs');
var path = require('path');
var multer = require('multer');
const User = require('../Model/UserSchema');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, file.fieldname + '-' + Date.now().toString() + '.' + ext)
    }
});
 
var upload = multer({ storage: storage });
 
uploadRouter.get('/', (req, res) => {
    if (req.rootUser.invoices.length > 0) {
        return res.json(req.rootUser.invoices);
    }
    else {
        return res.status(204).json({
            code: 204,
            message: "No invoices present!!"
        });
    }
});
 
 
uploadRouter.post('/', upload.single('image'), async (req, res) => {
 
    const img = {
        data: fs.readFileSync(path.join(path.resolve(__dirname, '..'), "uploads", req.file.filename), 'base64'),
        contentType: 'image/png'
    }
    const newAlternative = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $push: {"invoices": {data: img.data, contentType: img.contentType}}
        }
    );
    if (newAlternative.modifiedCount > 0) {
        return res.status(201).json({
            code: 201,
            message: "Alternative successfully added!"
        });
    }
    return res.status(400).json({
        code: 400,
        message: "Alternative could not be added!"
    });
});

module.exports = uploadRouter;