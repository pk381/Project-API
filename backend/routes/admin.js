const express = require('express');
const adminController = require('../controllers/admin')

const router = express.Router();

router.post('/sign-up', adminController.postSignUp);
router.post('/log-in', adminController.postLogin);
router.post('/add-api', adminController.addAPI);

module.exports = router;