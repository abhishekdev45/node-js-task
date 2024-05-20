const bcrypt = require("bcrypt");
const { Patient } = require("../models/associations");

const registerPatient = async (req, res) => {
    
  try {
   
    const {
      name,
      address,
      email,
      phoneNumber,
      password,
      photo,
      PsychiatristId,
    } = req.body;

    console.log(password,"hi")
    if (!name || !address || !email || !password || !photo) {
      return res
        .status(400)
        .json({
          success: false,
          error: "All required fields must be provided",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const patient = await Patient.create({
      name,
      address,
      email,
      phoneNumber,
      password: hashedPassword,
      photo,
      PsychiatristId,
    });

    res.status(201).json({ success: true, data: patient });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((e) => e.message);
      return res.status(400).json({ success: false, errors });
    }
    console.error("Error registering patient:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = { registerPatient };
