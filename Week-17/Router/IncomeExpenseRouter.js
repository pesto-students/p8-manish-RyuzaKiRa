let express = require('express');
let incomeExpenseRouter = express.Router();
let User = require('../Model/UserSchema');

incomeExpenseRouter.get('/', async (req, res) => {
    if (req.query.year || req.query.month) {
        let savings = [];
        let incomes = [];
        let expenses = [];
        if (req.query.year) {
            incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.year": req.query.year } }, 
                { $group: { _id: "", totalIncomes: { $sum: "$incomes.amount" } } }, 
                { $project: { _id: 0, totalIncomes: "$totalIncomes" } }
            ]);
            expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.year": req.query.year } }, 
                { $group: { _id: "", totalExpenses: { $sum: "$expenses.amount" } } }, 
                { $project: { _id: 0, totalExpenses: "$totalExpenses" } }
            ]);
            savings = [{
                totalSavings: (incomes.length > 0 ? incomes[0].totalIncomes : 0) - (expenses.length > 0 ? expenses[0].totalExpenses : 0)
            }]
        } else {
            incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.month": req.query.month } }, 
                { $group: { _id: "", totalIncomes: { $sum: "$incomes.amount" } } }, 
                { $project: { _id: 0, totalIncomes: "$totalIncomes" } }
            ]);
            expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.month": req.query.month } }, 
                { $group: { _id: "", totalExpenses: { $sum: "$expenses.amount" } } }, 
                { $project: { _id: 0, totalExpenses: "$totalExpenses" } }
            ]);
            savings = [{
                totalSavings: (incomes.length > 0 ? incomes[0].totalIncomes : 0) - (expenses.length > 0 ? expenses[0].totalExpenses : 0)
            }]
        }
        return res.status(200).json({
            Income: incomes.length > 0 ? incomes[0].totalIncomes : 0,
            Expense: expenses.length > 0 ? expenses[0].totalExpenses : 0,
            Saving: savings[0].totalSavings
        });
    }
    const incomeExpenseSaving = await User.aggregate([
        { $match: { _id: req.rootUser._id } }, 
        { 
            $project: { 
                _id: 0, 
                Income: { $sum: "$incomes.amount" },
                Expense: { $sum: "$expenses.amount" },
                Saving: {
                    $subtract: [
                       { $sum: "$incomes.amount" }, 
                       { $sum: "$expenses.amount" }
                    ]
                }
            } 
        }
    ]);
    return res.status(200).json(incomeExpenseSaving[0]);
});

incomeExpenseRouter.get('/incomes', async (req, res) => {
    if (req.query.year || req.query.month) {
        let incomes = [];
        if (req.query.year) {
            incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.year": req.query.year } }, 
                { $group: { _id: "", totalIncomes: { $sum: "$incomes.amount" } } }, 
                { $project: { _id: 0, totalIncomes: "$totalIncomes" } }
            ]);
        } else {
            incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.month": req.query.month } }, 
                { $group: { _id: "", totalIncomes: { $sum: "$incomes.amount" } } }, 
                { $project: { _id: 0, totalIncomes: "$totalIncomes" } }
            ]);
        }
        return res.status(200).json(incomes.length > 0 ? incomes[0] : {totalIncomes: 0});
    }
    const incomes = await User.aggregate([
        { $match: { _id: req.rootUser._id } }, 
        { $project: { _id: 0, totalIncomes: { $sum: "$incomes.amount" } } }
    ]);
    return res.status(200).json(incomes.length > 0 ? incomes[0] : {totalIncomes: 0});
});

incomeExpenseRouter.get('/expenses', async (req, res) => {
    if (req.query.year || req.query.month) {
        let expenses = [];
        if (req.query.year) {
            expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.year": req.query.year } }, 
                { $group: { _id: "", totalExpenses: { $sum: "$expenses.amount" } } }, 
                { $project: { _id: 0, totalExpenses: "$totalExpenses" } }
            ]);
        } else {
            expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { 
                    $match: { 
                        "expenses.month": req.query.month 
                    } 
                }, 
                { 
                    $group: { 
                        _id: "", 
                        totalExpenses: { 
                            $sum: "$expenses.amount" 
                        } 
                    } 
                }, 
                { 
                    $project: { 
                      _id: 0, 
                      totalExpenses: "$totalExpenses" 
                    }
                }
            ]);
        }
        return res.status(200).json(expenses.length > 0 ? expenses[0] : {totalExpenses: 0});
    }
    const expenses = await User.aggregate([
        { $match: { _id: req.rootUser._id } }, 
        { 
            $project: { 
                _id: 0, 
                totalExpenses: { 
                    $sum: "$expenses.amount" 
                } 
            } 
        }
    ]);
    return res.status(200).json(expenses.length > 0 ? expenses[0] : {totalExpenses: 0});
});

incomeExpenseRouter.get('/savings', async (req, res) => {
    if (req.query.year || req.query.month) {
        let savings = [];
        if (req.query.year) {
            const incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.year": req.query.year } }, 
                { $group: { _id: "", totalIncomes: { $sum: "$incomes.amount" } } }, 
                { $project: { _id: 0, totalIncomes: "$totalIncomes" } }
            ]);
            const expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.year": req.query.year } }, 
                { $group: { _id: "", totalExpenses: { $sum: "$expenses.amount" } } }, 
                { $project: { _id: 0, totalExpenses: "$totalExpenses" } }
            ]);
            savings = [{
                totalSavings: (incomes.length > 0 ? incomes[0].totalIncomes : 0) - (expenses.length > 0 ? expenses[0].totalExpenses : 0)
            }]
        } else {
            const incomes = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$incomes" }, 
                { $match: { "incomes.month": req.query.month } }, 
                { $group: { _id: "", totalIncomes: { $sum: "$incomes.amount" } } }, 
                { $project: { _id: 0, totalIncomes: "$totalIncomes" } }
            ]);
            const expenses = await User.aggregate([
                { $match: { _id: req.rootUser._id } }, 
                { $unwind: "$expenses" }, 
                { $match: { "expenses.month": req.query.month } }, 
                { $group: { _id: "", totalExpenses: { $sum: "$expenses.amount" } } }, 
                { $project: { _id: 0, totalExpenses: "$totalExpenses" } }
            ]);
            savings = [{
                totalSavings: (incomes.length > 0 ? incomes[0].totalIncomes : 0) - (expenses.length > 0 ? expenses[0].totalExpenses : 0)
            }]
        }
        return res.status(200).json(savings);
    }
    savings = await User.aggregate([
        { $match: { _id: req.rootUser._id } }, 
        { 
            $project: { 
                _id: 0, 
                totalSavings: {
                    $subtract: [
                       { $sum: "$incomes.amount" }, 
                       { $sum: "$expenses.amount" }
                    ]
                }
            } 
        }
    ]);
    return res.status(200).json(savings[0]);
});

incomeExpenseRouter.post('/incomes', async (req, res) => {
    const newIncome = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $push: {
                incomes: {
                    year: req.body.year,
                    month: req.body.month,
                    incomeType: req.body.incomeType,
                    amount: req.body.amount
                }
            }
        }
    );
    if (newIncome.modifiedCount > 0) {
        return res.status(201).json({
            code: 201,
            message: "Income successfully added!"
        });
    }
    return res.status(400).json({
        code: 400,
        message: "Income could not be added!"
    });
});

incomeExpenseRouter.post('/expenses', async (req, res) => {
    const newExpense = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $push: {
                expenses: {
                    year: req.body.year,
                    month: req.body.month,
                    expenseType: req.body.expenseType,
                    amount: req.body.amount
                }
            }
        }
    );
    if (newExpense.modifiedCount > 0) {
        return res.status(201).json({
            code: 201,
            message: "Expense successfully added!"
        });
    }
    return res.status(400).json({
        code: 400,
        message: "Expense could not be added!"
    });
});



module.exports = incomeExpenseRouter;