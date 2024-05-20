const Psychiatrist = require("../models/psychiatrist");
const Hospital = require("../models/hospital");

const addPsychiatrist = async (req, res) => {
  try {
    const { name, HospitalId } = req.body;

    if (!name || !HospitalId) {
      return res
        .status(400)
        .json({ success: false, error: "Name and Hospital ID are required" });
    }

    const hospital = await Hospital.findByPk(HospitalId);

    if (!hospital) {
      return res
        .status(404)
        .json({ success: false, error: "Hospital not found" });
    }

    const psychiatrist = await Psychiatrist.create({ name, HospitalId });

    res.status(201).json({ success: true, data: psychiatrist });
  } catch (error) {
    console.error("Error adding psychiatrist:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = { addPsychiatrist };
