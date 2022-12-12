const express = require('express');
const router = express.Router();

const api = require('../api')

router.route('/login').post(api.login.signIn)
router.route('/registration/check').post(api.registration.check)
router.route('/registration').post(api.registration.createAccount)

module.exports = router;
