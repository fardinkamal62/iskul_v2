const express = require('express');
const router = express.Router();

const api = require('../api')

router.route('/').get(api.home.home)

module.exports = router;
