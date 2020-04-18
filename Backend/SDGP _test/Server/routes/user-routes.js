const express = require('express');
const router = express.Router();
const check_auth = require("../middleware/check-auth");

const userController = require('../Controllers/user-controller');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/editUser', check_auth, userController.editUserDetails);

module.exports = router;