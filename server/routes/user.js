const express = require('express');
const router = express.Router();
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const {login, logout, register} = require('../controllers/user');

router.post('/login', validateSigninRequest, isRequestValidated, login);
router.post('/register', validateSignupRequest, isRequestValidated, register);
router.post('/logout', logout);

module.exports = router;