const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController')


router.post('/', userController.userRegister);
router.get('/', userController.userLogin);


module.exports = router;