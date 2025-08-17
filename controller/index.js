// Get Data From Blockchain

const getData = (req, res) => {
  res.send({
    AFR: 1,
    NGN: 20,
    USDT: 0.665,
  });
};

module.exports = { getData };
