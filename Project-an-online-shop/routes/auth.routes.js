const express = require("express");
const authController = require("../controllers/auth.controller");
const getSignupPage = require("../controllers/auth.controller");
const {signup} = require("../controllers/auth.controller");
const router = express.Router();

router.get('/signup', authController.getSignupPage);
router.post('/signup', authController.signup);
router.get('/login', authController.getLoginPage);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;