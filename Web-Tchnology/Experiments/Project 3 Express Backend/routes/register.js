const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Registration received! Thank you for registering");
});

module.exports = router;