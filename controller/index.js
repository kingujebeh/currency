const getData = (req, res) => {
  res.send({
    AFR: 0,
    NGN: 6000,
    USD: 4,
  });
};

module.exports = { getData };
