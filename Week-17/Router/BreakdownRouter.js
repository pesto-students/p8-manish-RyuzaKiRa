let express = require('express');
let breakdownRouter = express.Router();
let User = require('../Model/UserSchema');

breakdownRouter.get('/', async (req, res) => {
    if (req.query.year || req.query.month) {
        let incomes = [];
        let expenses = [];
        if (req.query.year) {
            incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.year": req.query.year } },
                { $project: { _id: 0, incomes: { year: 1, month: 1, incomeType: 1, amount: 1 } } }
            ]);
            expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.year": req.query.year } },
                { $project: { _id: 0, expenses: { year: 1, month: 1, expenseType: 1, amount: 1 } } }
            ]);
        } else {
            incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.month": req.query.month } },
                { $project: { _id: 0, incomes: { year: 1, month: 1, incomeType: 1, amount: 1 } } }
            ]);
            expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.month": req.query.month } },
                { $project: { _id: 0, expenses: { year: 1, month: 1, expenseType: 1, amount: 1 } } }
            ]);
        }
        const breakdown = {
            incomes,
            expenses
        }
        return res.status(200).json(breakdown);
    }
    const breakdown = await User.aggregate([
        { $match: { _id: req.rootUser._id } }, 
        { 
            $project: { 
                _id: 0, 
                incomes: { year: 1, month: 1, incomeType: 1, amount: 1 },
                expenses: { year: 1, month: 1, expenseType: 1, amount: 1 }
            }
        }
    ]);
    return res.status(200).json(breakdown[0]);
});

breakdownRouter.get('/incomes', async (req, res) => {
    if (req.query.year || req.query.month) {
        let incomes = [];
        if (req.query.year) {
            incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.year": req.query.year } },
                { $project: { _id: 0, incomes: { year: 1, month: 1, incomeType: 1, amount: 1 } } }
            ]);
        } else {
            incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.month": req.query.month } },
                { $project: { _id: 0, incomes: { year: 1, month: 1, incomeType: 1, amount: 1 } } }
            ]);
        }
        return res.status(200).json(incomes);
    }
    const incomes = await User.aggregate([
        { $match: { _id: req.rootUser._id } }, 
        { $project: { _id: 0, incomes: { year: 1, month: 1, incomeType: 1, amount: 1 } } }
    ]);
    return res.status(200).json(incomes);
});

breakdownRouter.get('/expenses', async (req, res) => {
    if (req.query.year || req.query.month) {
        let expenses = [];
        if (req.query.year) {
            expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.year": req.query.year } },
                { $project: { _id: 0, expenses: { year: 1, month: 1, expenseType: 1, amount: 1 } } }
            ]);
        } else {
            expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.month": req.query.month } },
                { $project: { _id: 0, expenses: { year: 1, month: 1, expenseType: 1, amount: 1 } } }
            ]);
        }
        return res.status(200).json(expenses);
    }
    const expenses = await User.aggregate([
        { $match: { _id: req.rootUser._id } }, 
        { 
            $project: { 
                _id: 0, 
                expenses: { 
                    year: 1, 
                    month: 1, 
                    expenseType: 1, 
                    amount: 1
                }
            } 
        }
    ]);
    return res.status(200).json(expenses);
});

module.exports = breakdownRouter;