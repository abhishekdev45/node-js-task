const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Patient = require('./patient');

const Psychiatrist = sequelize.define('Psychiatrist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = Psychiatrist;
