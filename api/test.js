const peopleService = require("../src/services/people.service");

module.exports = async (req, res) => {
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
};