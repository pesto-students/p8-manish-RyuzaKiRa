const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path: './config.env'});

const DB = process.env.DATABASE_URL;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection Successful!');
}).catch((err) => console.log(err));