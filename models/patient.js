const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database"); // Ensure correct import path

const Patient = sequelize.define("Patient", {
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
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [10, 255],
        msg: "Address should be at least 10 characters long",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Email address already exists",
    },
    validate: {
      isEmail: {
        args: true,
        msg: "Email should be a valid email address",
      },
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isPhoneNumber(value) {
        if (value && !/^\+?\d{10,}$/.test(value)) {
          throw new Error(
            "Phone number must contain at least 10 numbers with optional country code"
          );
        }
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isPassword(value) {
        if (!/[A-Z]/.test(value)) {
          throw new Error(
            "Password must contain at least one uppercase letter"
          );
        }
        if (!/[a-z]/.test(value)) {
          throw new Error(
            "Password must contain at least one lowercase letter"
          );
        }
        if (!/\d/.test(value)) {
          throw new Error("Password must contain at least one number");
        }
      },
    },
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Patient;
