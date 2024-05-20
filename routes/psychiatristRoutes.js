const express = require("express");
const { addPsychiatrist } = require("../controllers/psychiatristController");

const router = express.Router();

router.post("/addPsychiatrist", addPsychiatrist);

module.exports = router;
