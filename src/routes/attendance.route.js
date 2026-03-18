const express = require("express");
const router = express.Router();
const peopleService = require("../services/people.service");

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const data = await peopleService.login();

    res.json({
      success: true,
      stoken: data.message,
      raw: data
    });

  } catch (err) {
    console.error(err.response?.data || err.message);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// ATTENDANCE
router.post("/attendance", async (req, res) => {
  try {
    const { stoken, type, p4 } = req.body;

    if (!stoken || !type || !p4) {
      return res.status(400).json({
        success: false,
        message: "Missing params"
      });
    }

    const data = await peopleService.attendance({ stoken, type, p4 });

    res.json({
      success: true,
      data
    });

  } catch (err) {
    console.error(err.response?.data || err.message);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;