require("dotenv").config();

const express = require("express");
const cors = require("cors");

const attendanceRoute = require("./routes/attendance.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", attendanceRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});