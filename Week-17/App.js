const dotenv = require("dotenv");
const express = require('express');
const app = express();
const CookieParser = require('cookie-parser');
const userAuthRouter = require('./Router/UserAuthRouter');
const fundsRouter = require('./Router/FundsRouter');
const incomeExpenseRouter = require('./Router/IncomeExpenseRouter');
const breakdownRouter = require('./Router/BreakdownRouter');
const uploadRouter = require('./Router/UploadRouter');
const authenticate = require("./Middleware/Auth");
app.use(CookieParser());

dotenv.config({path: './config.env'});

require('./DB/MongoDB');

app.use(express.json());

app.use("/users", userAuthRouter);
app.use(authenticate);
app.use("/funds", fundsRouter);
app.use("/income-expense", incomeExpenseRouter);
app.use("/breakdown", breakdownRouter);
app.use("/upload", uploadRouter);
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running On Port no.`+PORT);
});