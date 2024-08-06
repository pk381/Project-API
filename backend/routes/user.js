const express = require('express');
const userController = require('../controllers/user')

const router = express.Router();

router.post('/sign-up', userController.postSignUp);
router.post('/log-in', userController.postLogin);
router.post('/add-api', userController.addAPI);

module.exports = router;