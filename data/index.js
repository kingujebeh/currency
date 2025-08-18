const EventEmitter = require("events");

class SharedData extends EventEmitter {
  constructor() {
    super();
    this.crypto = [
      {
        name: "Africas",
        token: "AFR",
        price: 0,
      },
      {
        name: "USD",
        token: "USDT",
        price: 0,
      },
      {
        name: "Augment Plus",
        token: "APS",
        price: 0,
      },
      {
        name: "Augment",
        token: "AUG",
        price: 0,
      },
    ];

    this.fiat = [
      {
        name: "Naira",
        token: "NGN",
        price: 0,
      },
      {
        name: "Euro",
        token: "EUR",
        price: 0,
      },
    ];
  }

  setPrice(type, token, amount) {
    this[type].find((currency) => currency.token === token).price = amount;
    this.emit("update", { token, amount }); // notify listeners
  }

  getCurrency(token) {
    return this.currencies.find((currency) => currency.token === token);
  }
}

module.exports = new SharedData();
