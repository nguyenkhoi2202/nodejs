module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    message: "API is running. Use /api/login and /api/attendance or /login and /attendance.",
    endpoints: ["/api/login", "/api/attendance", "/login", "/attendance"]
  });
};
