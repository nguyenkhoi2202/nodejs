const axios = require("../config/axios");

class PeopleService {

  async login() {
    const body = {
      username: process.env.USERNAME,
      Password: process.env.PASSWORD,
      OS: "2",
      DeviceID: process.env.DEVICE_ID,
      Version: "26.2",
      LangID: "VN",
      DeviceName: "iPhone 11",
      DeviceToken: process.env.DEVICE_TOKEN,
      company: "HDBANK",
      build: "10"
    };

    const res = await axios.post("/sovico/api/user/login", body);

    return res.data;
  }

  async attendance({ stoken, type, p4 }) {
    const body = {
      Stoken: stoken,
      LangID: "VN",
      AppVersion: process.env.APP_VERSION,
      OS: "2",
      DataHeader: {
        P0: process.env.P0,
        P1: type,
        P2: process.env.P2,
        P3: process.env.P3,
        P4: p4,
        P5: "GIH_8F",
        P6: ""
      },
      company: "HDBANK"
    };

    const res = await axios.post(
      "/sovico/api/ticket/attendance/wifi/capture1",
      body,
      {
        headers: {
          deviceid: process.env.DEVICE_ID
        }
      }
    );

    return res.data;
  }
}

module.exports = new PeopleService();