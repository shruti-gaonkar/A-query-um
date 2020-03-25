const express = require('express'),
    { apiaqueryum: controller } = require('../../controllers');

const router = express.Router();

router.route('/save')
    .post(controller.save);

router.route('/list')
    .get(controller.list);

module.exports = router;    