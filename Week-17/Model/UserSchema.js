const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    funds: {
        assets: [
            {
                asset: {
                    type: String,
                    required: false
                }
            }
        ],
        equitys: [
            {
                equity: {
                    type: String,
                    required: false
                }
            }
        ],
        fixedIncomes: [
            {
                fixedIncome: {
                    type: String,
                    required: false
                }
            }
        ],
        alternatives: [
            {
                alternative: {
                    type: String,
                    required: false
                }
            }
        ]
    },
    incomes: [
        {
            year: {
                type: String,
                required: false
            },
            month: {
                type: String,
                required: false
            },
            incomeType: {
                type: String,
                required: false
            },
            amount: {
                type: Number,
                required: false
            }
        }
    ],
    expenses: [
        {
            year: {
                type: String,
                required: false
            },
            month: {
                type: String,
                required: false
            },
            expenseType: {
                type: String,
                required: false
            },
            amount: {
                type: Number,
                required: false
            }
        }
    ],
    invoices: [
        {
            data: {
                type: String,
                required: false
            },
            contentType: {
                type: String,
                required: false
            }
        }
    ],
    token: {
        type: String,
        required: false
    }
})

userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//We are generating JWT Token
userSchema.methods.generateUserAuthToken = async function() {
    try{
        let token = jwt.sign({id:this._id, name: `${this.firstName} ${this.lastName}`, userId: this.email, roles: "User"}, process.env.SECRET_KEY);
        this.token = token;
        await this.save();
        return token;
    } catch(err){
        console.log(err);
    }
}

//We are generating Admin JWT Token
userSchema.methods.generateAdminAuthToken = async function() {
    try{
        let token = jwt.sign({id:this._id, name: `${this.firstName} ${this.lastName}`, userId: this.email, roles: "Admin"}, process.env.SECRET_KEY);
        this.token = token;
        await this.save();
        return token;
    } catch(err){
        console.log(err);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
