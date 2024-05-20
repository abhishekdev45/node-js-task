const Psychiatrist = require('./psychiatrist');
const Patient = require('./patient');
const Hospital = require('./hospital');

Psychiatrist.hasMany(Patient, { foreignKey: 'PsychiatristId' });
Patient.belongsTo(Psychiatrist, { foreignKey: 'PsychiatristId' });

Hospital.hasMany(Psychiatrist, { foreignKey: 'HospitalId', onDelete: 'CASCADE' });
Psychiatrist.belongsTo(Hospital, { foreignKey: 'HospitalId' });

module.exports = { Psychiatrist, Patient ,Hospital};
