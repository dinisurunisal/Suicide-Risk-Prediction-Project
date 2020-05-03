const express = require('express');
const router = express.Router();
const check_auth = require("../middleware/check-auth");

const userController = require('../Controllers/user-controller');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgetpassword', userController.forgetPassword);
router.post('/forgetpassword/token', userController.tokenValidation);
router.post('/forgetpassword/changepassword', userController.changePassword);

module.exports = router;