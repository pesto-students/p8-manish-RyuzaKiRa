const dotenv = require("dotenv");
const express = require('express');
const app = express();
dotenv.config({path: './config.env'});

app.use(express.json());

app.use(require('./Router/routes'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running On Port no.`+process.env.PORT);
});