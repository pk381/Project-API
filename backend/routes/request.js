const express = require('express');
const requestController = require('../controllers/request');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/getall', auth.authanticate, requestController.getRequests);

module.exports = router;