const express = require('express');
const requestController = require('../controllers/request');
const auth = require('../middlewares/auth');
const check = require('../middlewares/checkPurchase')

const router = express.Router();

router.get('/getall', auth.authanticate, check.checkPurchase, requestController.getAll);
router.get('/getbyid/:id', auth.authanticate, check.checkPurchase, requestController.getByID);
router.get('/getbyname/:name', auth.authanticate, check.checkPurchase, requestController.getByName);
router.get('/getbycategory/:category', auth.authanticate, check.checkPurchase, requestController.getByCategory);


module.exports = router;