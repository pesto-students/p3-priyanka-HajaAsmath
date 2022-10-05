const express = require('express');
const router = express.Router();
const statementService = require('./statementService');
const {getLoggedInUser} = require('../utils/util')

router.get('/getStatement',async (req, res) => {
    const year = req.query.year;
    const month = req.query. month;
    const userId = getLoggedInUser(req);
    if(userId) {
        let result;
        if(year) {
            result = await statementService.getStatementByYear(userId, year);
        } else if(month) {
            result = await statementService.getStatementByMonth(userId, month);
        } else {
            result = 'Enter a month or year';
        }
        res.end(JSON.stringify(result));
    } else {
        res.end('User not logged in');
    }
    
});

router.get('/getSpending', async (req, res) => {
    const year = req.query.year;
    const month = req.query. month;
    const userId = getLoggedInUser(req);
    if(userId) {
        let result;
        if(year) {
            result = await statementService.getIncomeAndExpenseByYear(userId, year);
        } else if(month) {
            result = await statementService.getIncomeAndExpenseByMonth(userId, month);
        } else {
            result = 'Enter a month or year';
        }
        res.end(JSON.stringify(result));
    } else {
        res.end('User not logged in');
    }
})

module.exports = router;