var express = require('express');
var router = express.Router();

const referencesController = require("../controllers/referencesController");

router.get("/api/references", referencesController.getAll);
router.get("/api/references/:id", referencesController.getById);
router.post("/api/references", referencesController.add);
router.put("/api/references/:id", referencesController.update);
router.delete("/api/references/:id", referencesController.delete);

module.exports = router;