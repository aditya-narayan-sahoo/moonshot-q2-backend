const express = require("express");
const router = express.Router();
const { shareChart, accessChart } = require("../controllers/chartController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/share", protect, shareChart);

router.get("/access/:token", protect, accessChart);

module.exports = router;
