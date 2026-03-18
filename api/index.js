require("dotenv").config();

const express = require("express");
const cors = require("cors");

const attendanceRoute = require("../src/routes/attendance.route");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/", attendanceRoute);

module.exports = app;