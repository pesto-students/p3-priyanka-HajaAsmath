const express = require('express');
const router = express.Router();
const assetService = require('./AssetsService')
const {getLoggedInUser} = require('../utils/util')

router.get('/getAssets', async (req, res) => {
    const userId = getLoggedInUser(req);
    if(userId) {
        const result = await assetService.getAssets(userId);
        res.end(JSON.stringify(result));
    } else {
        res.end('User not logged in')
    }
});

router.post('/modifyAssets', async (req, res) => {
    const assetModal = req.body;
    const userId = getLoggedInUser(req);
    if(userId) {
        const result = await assetService.modifyAsset(assetModal, userId);
        res.end(result);
    } else {
        res.end('User not logged in');
    }
});

router.delete('/deleteAsset', async (req, res) => {
    const userId = getLoggedInUser(req);
    if(userId) {
        res.end(await assetService.deleteAsset(userId));
    } else {
        res.end('User not logged in');
    }
});

module.exports = router;