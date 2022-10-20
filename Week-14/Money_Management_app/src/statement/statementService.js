const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection(JSON.parse(process.env.DATABASE));

const getStatementByYear = async (userId, year) => {
    return await connection.promise().query('select income, saving, expense, statement_date from STATEMENT where user_id=? and YEAR(statement_date) = ?', [userId, year])
    .then(result => {
        if(result.
            length > 0) {
            let count = 0;
            let res = [];
            while(count < result.length-1) {
                res.push(result[count]);
                count++;
            }
            return res;
        } else {
            return 'Statement not available for user ' + userId;
        }
    });
}

const getStatementByMonth = async (userId, month) => {
    return await connection.promise().query('select income, saving, expense, statement_date from STATEMENT where user_id=? and MONTHNAME(statement_date) = ?', [userId, month])
    .then(result => {
        if(result.length > 0) {
            return result[0][0];
        } else {
            return 'Statement not available for user ' + userId;
        }
    });
}

const getIncomeAndExpenseByYear = async (userId, year) => {
    return await connection.promise().query('select income, expense, statement_date from STATEMENT where user_id=? and YEAR(statement_date) = ?', [userId, year])
    .then(result => {
        if(result.
            length > 0) {
            let count = 0;
            let res = [];
            while(count < result.length-1) {
                res.push(result[count]);
                count++;
            }
            return res;
        } else {
            return 'Statement not available for user ' + userId;
        }
    });
}

const getIncomeAndExpenseByMonth = async (userId, month) => {
    return await connection.promise().query('select income, saving, expense, statement_date from STATEMENT where user_id=? and MONTHNAME(statement_date) = ?', [userId, month])
    .then(result => {
        if(result.length > 0) {
            return result[0][0];
        } else {
            return 'Statement not available for user ' + userId;
        }
    });
}

module.exports = {getStatementByYear, getStatementByMonth, getIncomeAndExpenseByYear, getIncomeAndExpenseByMonth};