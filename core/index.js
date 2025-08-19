const data = require("../data");
const { updateData, calculateAllCryptoTransactions } = require("../func");

const init = async () => {
  await updateData();
  await calculateAllCryptoTransactions();
};

module.exports = { init };
