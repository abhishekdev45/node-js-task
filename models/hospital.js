const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Psychiatrist = require('./psychiatrist');

const Hospital = sequelize.define('Hospital', {
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


module.exports = Hospital;
