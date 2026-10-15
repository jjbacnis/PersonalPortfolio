var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController.js');

router.get('/', indexController.helloWorld);
router.get('/welcome', indexController.welcome);

router.get('/api/projects', indexController.references);
router.get('/api/services', indexController.references);
router.get('/api/users/', indexController.references);

module.exports = router;