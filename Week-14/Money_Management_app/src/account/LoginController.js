const express = require("express");
const router = express.Router();
const crypto = require('../utils/cryptoUtil')

const service = require('./LoginService');

router.post('/login', async (req, res) => {
    const result = await service.login(req.body.username, req.body.password);
    if(result.length > 0) {
        req.session.userId = result[0].id;
        res.end('User logged in');
    } else {
        res.end('User not found');
    }
})

router.post('/signUp', async (req, res) => {
    const result = await service.signUp(req.body.username, req.body.password);
    res.end(result);
});

router.get('/logout', (req, res) => {
    service.logout(req, res);
})

module.exports = router