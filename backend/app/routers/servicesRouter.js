var express = require('express');
var router = express.Router();

var servicesController = require('../controllers/servicesController.js');

router.post('/', servicesController.processAdd);
router.get('/', servicesController.servicesList);
router.get('/:id', servicesController.getByID);
router.put('/:id', servicesController.processEdit);
router.delete('/:id', servicesController.processDelete);

module.exports = router;