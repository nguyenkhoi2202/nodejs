const peopleService = require("../src/services/people.service");

module.exports = async (req, res) => {
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
};