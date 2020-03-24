const express = require('express'),
    { apiaqueryum: controller } = require('../../controllers');

const router = express.Router();

router.route('/save')
    .get(controller.save);

module.exports = router;    