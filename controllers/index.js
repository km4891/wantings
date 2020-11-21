const router = require('express').Router();
const apiRoutes = require('./api');
const emailRoute = require('./email-route');

router.use('/api', apiRoutes);
router.use('/email', emailRoute);


router.use((req, res) => {
    res.status(404).end();
  });
  

module.exports = router;