var express = require('express');
var router = express.Router();

var indexController = require("../controllers/indexController.js");

router.get("/", indexController.indexMessage);

module.exports = router;