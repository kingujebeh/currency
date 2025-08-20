const axios = require("axios");

const data = require("../data");

const APIKEY = "4VADWX8QNMQUXWFID9CCJAQ1BAG1VQNP21";

const updateData = async () => {
  for (const [key, money] of Object.entries(data).filter(
    ([key]) => !key.startsWith("_")
  )) {
    if (!Array.isArray(money)) {
      // 👇 skip if it's not an array
      continue;
    }

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

    const currency = {};

    for (const tx of royalTx) {
      if (!tx.currency) continue; // skip if no currency

      const { type, token, value, amount } = tx.currency;

      if (!type || !token) continue; // safety check

      // initialize type container
      if (!currency[type]) {
        currency[type] = {};
      }

      // initialize token entry
      if (!currency[type][token]) {
        currency[type][token] = { token, value: 0, amount: 0 };
      }

      // accumulate into both fields
      currency[type][token].value += value || 0;
      currency[type][token].amount += amount || 0;
      currency[type][token].price =
        currency[type][token].value / currency[type][token].amount;
    }

    console.log(crypto.token, currency);
    data.setCurrency(crypto.token, currency);
  }
}

module.exports = { updateData, calculateAllCryptoTransactions };
