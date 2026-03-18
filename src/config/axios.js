const axios = require("axios");

const instance = axios.create({
  baseURL: "https://in-prod-svc-peopleapp-api.galaxy.one",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "version-app": "PNJ_20210105_V1",
    "Accept": "*/*",
    "Accept-Language": "vi-VN,vi;q=0.9",
    "User-Agent": "People/50 CFNetwork/3860.300.31 Darwin/25.2.0"
  }
});

module.exports = instance;