const router = require('express').Router();
const mailGun = require('./mailGun');

router.use('/', mailGun);

module.exports = router;