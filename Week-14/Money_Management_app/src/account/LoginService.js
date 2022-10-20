const mysql = require('mysql2');
const crypto = require('../utils/cryptoUtil')

require('dotenv').config();
const connection = mysql.createConnection(JSON.parse(process.env.DATABASE));

connection.connect();

const signUp = async (username, password) => {
    const encryptedPassword = crypto.encrypt(password);
    let result = await connection.promise().query(`SELECT username from USER where username = '${username}'`).then(result => result[0]);
    if(result.length === 0) {
        return await connection.promise().query(`INSERT INTO dummy.USER (username, password) VALUES ('${username}', '${encryptedPassword}')`).then(result => {
            if(result[0].affectedRows === 1) {
                return 'User Created';
            }
        }).catch(err => {
            return err.message;
        });
    } else {
        return 'Username already exist'
    }

}

const login = async (username, password) => {
    const encryptedPassword = crypto.encrypt(password);
    return await connection.promise().query(`SELECT id from dummy.USER where username='${username}' and password='${encryptedPassword}'`)
    .then(result => result[0]);
}

const logout = (req, res) => {
    if(req.session.userId) {
        req.session.destroy();
        res.end('User Logged out');
    } else {
        res.end('User not logged in');
    }
}

module.exports = {signUp, login, logout}