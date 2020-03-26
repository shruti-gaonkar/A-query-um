const express = require('express'),
    { api: controller } = require('../../controllers');

const router = express.Router();

router.route('/list')
    .get(controller.findAll);

router.route('/search/:query')
    .get(controller.findBy);

router.route('/create')
    .post(controller.createFishRecord);

router.route('/search/:query')
    .get(controller.findBy);

router.route("/searchById/:id")
    .get(controller.findFishById)
// .put(controller.updateFishRecord)
// .delete(controller.removeFishRecord);

module.exports = router;