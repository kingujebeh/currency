const axios = require("axios");

const data = require("../data");

const APIKEY = "4VADWX8QNMQUXWFID9CCJAQ1BAG1VQNP21";

const updateData = async () => {
  for (const [key, money] of Object.entries(data).filter(
    ([key]) => !key.startsWith("_")
  )) {
    money.forEach(async (info) => {
      data.setPrice(key, info.token, 1);
    });
  }
};

const calculateAllCryptoTransactions = async () => {
  for (const crypto of data.crypto) {
    if (crypto.address) {
      console.log(crypto);
      const transactions = await getTransactions(crypto);
      calculateValue(crypto, transactions);
    }
  }
};

const getTransactions = async (crypto) => {
  try {
    const url = `https://api.etherscan.io/v2/api?module=account&action=tokentx&contractaddress=${crypto.address}&sort=asc&page=1&offset=100&apikey=${APIKEY}&chainid=56`;
    const res = await axios.get(url);
    const transactions = res.data.result;
    const parsedTx = transactions.map((tx) => {
      const decimals = Number(tx.tokenDecimal);
      const unitsSent = Number(tx.value) / Math.pow(10, decimals);

      return {
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        amount: unitsSent, // token units
        symbol: tx.tokenSymbol,
        name: tx.tokenName,
      };
    });
    return parsedTx;
  } catch (err) {
    console.error(err);
  }
};

function calculateValue(crypto, transactions) {
  if (crypto.meta.type === "kingdom") {
    const royals = crypto.meta.royals;

    // Flatten all royal transactions into one array
    const royalTx = royals.flatMap((royal) => royal.transactions);

    let currency = {};

    for (const tx of royalTx) {
      if (!tx.currency) continue; // skip if tx has no currency field

      const { type, token, value } = tx.currency;

      // initialize object for this type if not created yet
      if (!currency[type]) {
        currency[type] = {};
      }

      // add or accumulate token value
      if (!currency[type][token]) {
        currency[type][token] = 0;
      }

      currency[type][token] += value;
    }

    delete currency.undefined;

    console.log(currency);
    return currency;
  }
}

module.exports = { updateData, calculateAllCryptoTransactions };
