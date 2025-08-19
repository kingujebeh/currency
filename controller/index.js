const data = require("../data");

const getData = (req, res) => {
  res.send(data.currency);
};

module.exports = { getData };
