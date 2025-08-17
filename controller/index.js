const getData = (req, res) => {
  res.send({
    AFR: 0,
    NGN: 5000,
    USD: 3,
  });
};

module.exports = { getData };
