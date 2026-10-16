var express = require('express');
var router = express.Router();

const referencesController = require("../controllers/referencesController.js");

router.post("/", referencesController.processAdd);
router.get("/", referencesController.referencesList);
router.get("/:id", referencesController.getByID);
router.put("/:id", referencesController.processEdit);
router.delete("/:id", referencesController.processDelete);

module.exports = router;