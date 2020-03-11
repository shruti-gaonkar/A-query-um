const express = require('express'),
    { api: controller } = require('../../controllers');

const router = express.Router();

router.route('/')
    .get(controller.findAll)
    .post(controller.createFishRecord);

router.route('/test')
    .get(controller.getTest);

router.route("/:id")
    .get(controller.findFishById)
// .put(controller.updateFishRecord)
// .delete(controller.removeFishRecord);

module.exports = router;