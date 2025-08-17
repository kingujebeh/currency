const express = require("express");

const controller = require('../controller')

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Currency");
});

router.get("/usd", (req, res) => {
  res.send("USD");
});

router.get("/ngn", (req, res) => {
  res.send("Naira");
});

router.get('/data', controller.getData)
module.exports = router;
