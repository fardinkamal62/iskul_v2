const express = require('express');
const router = express.Router();

const api = require('../api')
const auth = require('../middlewares/auth')

router.use(auth.authenticate)

router.route('/').get(api.home.index)
router.route('/updateProfile').put(api.home.updateProfile)

module.exports = router;
