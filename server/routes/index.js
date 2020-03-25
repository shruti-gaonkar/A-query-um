const express = require('express'),
    api = require('./api'),
    auth = require('./auth'),
    apinews = require("./api/news"),
    apiaqueryum = require("./api/aqueryum");

const router = express.Router();

router.use('/api/user', auth);
router.use('/api', api);

// Scrape news routes
router.use("/api", apinews);

router.use("/api/aqueryum", apiaqueryum);

module.exports = router;