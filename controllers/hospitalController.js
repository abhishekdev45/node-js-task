const Hospital = require('../models/hospital');
const Psychiatrist = require('../models/psychiatrist');
const Patient = require('../models/patient');
const sequelize  = require('../utils/database');

const addHospital = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, error: 'Hospital name is required' });
    }

    const hospital = await Hospital.create({ name });

    res.status(201).json({ success: true, data: hospital });
  } catch (error) {
    console.error('Error adding hospital:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

const getPsychiatristsForHospital = async (req, res) => {
  try {
    const { HospitalId } = req.body;

    if (!HospitalId) {
      return res.status(400).json({ error: 'Hospital ID is required' });
    }

    const hospital = await Hospital.findByPk(HospitalId);

    if (!Hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }

    const psychiatrists = await Psychiatrist.findAll({
      where: { HospitalId },
      include: [
        {
          model: Patient,
          attributes: [] 
        }
      ],
      attributes: [
        'id',
        'name',
        [sequelize.fn('COUNT', sequelize.col('Patients.id')), 'patientsCount']
      ],
      group: ['Psychiatrist.id']
    });

    const totalPsychiatristCount = psychiatrists.length;
    const totalPatientCount = psychiatrists.reduce((sum, psychiatrist) => sum + parseInt(psychiatrist.dataValues.patientsCount, 10), 0);

    const response = {
      hospitalName: hospital.name,
      totalPsychiatristCount,
      totalPatientCount,
      psychiatristDetails: psychiatrists.map(psychiatrist => ({
        id: psychiatrist.id,
        name: psychiatrist.name,
        patientsCount: parseInt(psychiatrist.dataValues.patientsCount, 10)
      }))
    };

    res.status(201).json({success:true , data:response});
  } catch (error) {
    console.error('Error fetching psychiatrists for hospital:', error);
    res.status(500).json({success:false , error: 'Internal server error' });
  }
};

module.exports = {
  addHospital,
  getPsychiatristsForHospital
};
