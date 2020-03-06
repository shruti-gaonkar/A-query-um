const express = require('express'),
    { api: controller } = require('../../controllers');

const router = express.Router();

router.route('/')
    .get(controller.getMain);

router.route('api/all')
    .get(controller.getAll);

module.exports = router;