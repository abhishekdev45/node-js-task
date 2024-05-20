const express = require("express");
const sequelize = require("./utils/database");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const patientRoutes = require("./routes/patientRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");
const psychiatristRoutes = require("./routes/psychiatristRoutes");

const { Patient, Psychiatrist, Hospital } = require("./models/associations");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/api/patients", patientRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/psychiatrist", psychiatristRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT);
    console.log(`Server running at ${process.env.PORT}`);
  })
  .catch((e) => {
    console.log(e);
  });
