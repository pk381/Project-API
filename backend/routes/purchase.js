const express = require('express');
const purchaseController = require('../controllers/purchase');
const authorize = require('../middlewares/auth')

const router = express.Router();

router.post('/api', authorize.authanticate, purchaseController.creatAPIKey);

module.exports = router;