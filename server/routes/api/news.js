const express = require('express'),
    { apinews: controller } = require('../../controllers');

const router = express.Router();

router.route('/scrape')
    .get(controller.scrapeData);

module.exports = router;    