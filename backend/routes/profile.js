const express = require('express');
const router = express.Router();

const api = require('../api')
const auth = require('../middlewares/auth')

router.use(auth.authenticate)

router.route('/').post(api.profile.get)

module.exports = router;
