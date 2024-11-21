const express = require("express");
const router = express.Router();
const { filterData } = require("../controllers/dataController");

router.get("/", filterData);

module.exports = router;
