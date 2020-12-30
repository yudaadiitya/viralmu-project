const express = require('express');
const router = express.Router();
// const { checkAuth } = require('../middleware/auth');
const userController = require('../controllers/user');

router.post('/login', userController.postLogin);
router.post('/register', userController.postRegister);
// router.get('/logout', checkAuth, adminController.getDestroy);
// router.get('/check', checkAuth, adminController.getCheck);

module.exports = router;