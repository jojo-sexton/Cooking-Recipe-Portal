const express = require("express");
const db = require("./db");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("testing if router working!");
});

module.exports = router;

//rout configuration here