const axios = require("axios");

const data = require("../data");

const APIKEY = process.env.APIKEY;


const updateData = async () => {
  for (const [key, money] of Object.entries(data).filter(
    ([key]) => !key.startsWith("_")
  )) {
    money.forEach(async (info) => {
      data.setPrice(key, info.token, 1);
    });
  }
};

module.exports = { updateData };
