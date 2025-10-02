
const express = require("express");
const router = express.Router();
const controller = require("../controllers/integrationController");





router.post("/esp", controller.addIntegration);
router.get("/esp/lists", controller.getLists);

module.exports = router;