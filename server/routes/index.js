const express = require('express'),
    api = require('./api'),
    auth = require('./auth');
const apinews = require("./api/news");

const router = express.Router();

router.use('/api/user', auth);
router.use('/api', api);

// Scrape news routes
router.use("/api", apinews);

module.exports = router;