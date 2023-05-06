let express = require('express');
let fundsRouter = express.Router();
let User = require('../Model/UserSchema');

fundsRouter.get('/', async (req, res) => {
    let rootUser = req.rootUser;
    res.status(200).json(rootUser.funds);
});

fundsRouter.get('/assets', async (req, res) => {
    let rootUser = req.rootUser;
    res.status(200).json(rootUser.funds.assets);
});

fundsRouter.get('/alternatives', async (req, res) => {
    let rootUser = req.rootUser;
    res.status(200).json(rootUser.funds.alternatives);
});

fundsRouter.get('/fixedIncome', async (req, res) => {
    let rootUser = req.rootUser;
    res.status(200).json(rootUser.funds.fixedIncome);
});

fundsRouter.get('/equitys', async (req, res) => {
    let rootUser = req.rootUser;
    res.status(200).json(rootUser.funds.equitys);
});

fundsRouter.post('/assets', async (req, res) => {
    const newAsset = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $push: {"funds.assets": {asset: req.body.asset}}
        }
    );
    if (newAsset.modifiedCount > 0) {
        return res.status(201).json({
            code: 201,
            message: "Asset successfully added!"
        });
    }
    return res.status(400).json({
        code: 400,
        message: "Asset could not be added!"
    });
});

fundsRouter.put('/assets/:id', async (req, res) => {
    const updatedAsset = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $set: {"funds.assets.$[xxx].asset": req.body.asset}
        },
            {arrayFilters: [{"xxx._id": req.params.id}]
        }
    );
    if (updatedAsset.modifiedCount > 0) {
        return res.status(200).json({
            code: 200,
            message: "Asset successfully modified!"
        });
    }
    return res.status(404).json({
        code: 404,
        message: "Asset with the given id not found!"
    });
});

fundsRouter.post('/alternatives', async (req, res) => {
    const newAlternative = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $push: {"funds.alternatives": {alternative: req.body.alternative}}
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

fundsRouter.put('/alternatives/:id', async (req, res) => {
    const updatedAlternatives = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $set: {"funds.alternatives.$[xxx].alternative": req.body.alternative}
        },
            {arrayFilters: [{"xxx._id": req.params.id}]
        }
    );
    if (updatedAlternatives.modifiedCount > 0) {
        return res.status(200).json({
            code: 200,
            message: "Alternative successfully modified!"
        });
    }
    return res.status(404).json({
        code: 404,
        message: "Alternative with the given id not found!"
    });
});

fundsRouter.post('/fixedIncomes', async (req, res) => {
    const newFixedIncome = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $push: {"funds.fixedIncomes": {fixedIncome: req.body.fixedIncome}}
        }
    );
    if (newFixedIncome.modifiedCount > 0) {
        return res.status(201).json({
            code: 201,
            message: "FixedIncome successfully added!"
        });
    }
    return res.status(400).json({
        code: 400,
        message: "FixedIncome could not be added!"
    });
});

fundsRouter.put('/fixedIncomes/:id', async (req, res) => {
    const updatedFixedIncome = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $set: {"funds.fixedIncomes.$[xxx].fixedIncome": req.body.fixedIncome}
        },
            {arrayFilters: [{"xxx._id": req.params.id}]
        }
    );
    if (updatedFixedIncome.modifiedCount > 0) {
        return res.status(200).json({
            code: 200,
            message: "FixedIncome successfully modified!"
        });
    }
    return res.status(404).json({
        code: 404,
        message: "FixedIncome with the given id not found!"
    });
});

fundsRouter.post('/equitys', async (req, res) => {
    const newEquity = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $push: {"funds.equitys": {equity: req.body.equity}}
        }
    );
    if (newEquity.modifiedCount > 0) {
        return res.status(201).json({
            code: 201,
            message: "Equity successfully added!"
        });
    }
    return res.status(400).json({
        code: 400,
        message: "Equity could not be added!"
    });
});

fundsRouter.put('/equitys/:id', async (req, res) => {
    const updatedEquity = await User.updateOne(
        {
            _id: req.rootUser.id
        },
        {
            $set: {"funds.equitys.$[xxx].equity": req.body.equity}
        },
            {arrayFilters: [{"xxx._id": req.params.id}]
        }
    );
    if (updatedEquity.modifiedCount > 0) {
        return res.status(200).json({
            code: 200,
            message: "Equity successfully modified!"
        });
    }
    return res.status(404).json({
        code: 404,
        message: "Equity with the given id not found!"
    });
});

module.exports = fundsRouter;