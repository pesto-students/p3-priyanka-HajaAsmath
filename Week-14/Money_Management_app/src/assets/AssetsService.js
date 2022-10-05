const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection(JSON.parse(process.env.DATABASE));

const getAssets = async (userId) => {
    return await connection.promise().query(`SELECT user_id, equity, fixed_income, alternative from dummy.ASSETS where user_id='${userId}'`)
    .then(result => {
        if(result.length > 0) {
            return result[0][0];
        } else {
            return 'No record found for user' + userId;
        }
    })
}

const modifyAsset = async (assetModal, userId) => {
    return await connection.promise().query(`UPDATE dummy.ASSETS t SET t.equity = ?, t.fixed_income = ?, t.alternative = ? WHERE t.user_id = ?`,
     [assetModal.equity, assetModal.fixed_income, assetModal.alternative, userId]).then(result => {
         if(result[0].affectedRows > 0) {
             return 'Record updated';
         } else {
             return 'No record found for user ' + userId;
         }
     })
}

const deleteAsset = async (userId) => {
    return await connection.promise().query('DELETE FROM dummy.ASSETS WHERE user_id = ?', [userId])
    .then(result => {
        if(result[0].affectedRows > 0) {
            return 'Asset deleted'
        } else {
            return 'No asset found for user '+userId;
        }
    })
}



module.exports = {getAssets, modifyAsset, deleteAsset}