const express = require('express');
const { addHospital, getPsychiatristsForHospital } = require('../controllers/hospitalController');

const router = express.Router();

router.post('/addHospital', addHospital);
router.post('/getPsychiatristsForHos', getPsychiatristsForHospital);

module.exports = router;
