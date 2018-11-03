var express = require('express');
var router = express.Router();

router.use('/account', require('./account'));
router.use('/password', require('./password'));
router.use('/signout', require('./signout'));

module.exports = router;
