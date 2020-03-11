const express = require('express'),
    { api: controller } = require('../../controllers');

const router = express.Router();

router.route('/list')
    .get(controller.findAll);

router.route('/search?q=:query')
    .get(controller.findBy);

router.route('/create')
    .post(controller.createFishRecord);

router.route('/test')
    .get(controller.getTest);

router.route("/:id")
    .get(controller.findFishById)
// .put(controller.updateFishRecord)
// .delete(controller.removeFishRecord);

module.exports = router;