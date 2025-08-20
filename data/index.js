const EventEmitter = require("events");

class SharedData extends EventEmitter {
  constructor() {
    super();
    this.crypto = [
      {
        name: "Africas",
        token: "AFR",
        price: 0,
        address: "0xc834f3c372271b51f506cd6e71daec448f1a5b3e",
        meta: {
          type: "kingdom",
          royals: [
            {
              name: "King",
              address: "0x0f0b46d8f75b6e3fb844e57d6c5eeaf3a4ed5978",
              transactions: [
                {
                  hash: "0x0843853d9bfb38a980e4048599c1de70c4a571a2afae4121e273acef47575bf1",
                  currency: {
                    value: 0,
                    amount: 15000,
                  },
                },
                {
                  hash: "0x2591d8410bb78e0deb359609ec62c2b5da9988449e1a12476c6f238911e7a49b",
                  currency: {
                    value: 0,
                    amount: 250000,
                  },
                },
                {
                  hash: "0xc9f1ba339a163d846614e1064d76d1fb8d619d80a019e95d46e5e26c41a7a1f2",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 250,
                    value: 150000,
                  },
                },
              ],
            },
            {
              name: "King",
              address: "0x88f0d4f0e3bc2b7a00a98a20eeda77f9879e7763",
              transactions: [
                {
                  hash: "0x928005fc90a9e2b516108350a8050bc363711e30c6ae86597dd1ae69ec4491b",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    value: 15000,
                  },
                },
                {
                  hash: "0x928005fc90a9e2b516108350a8050bc363711e30c6ae86597dd1ae69ec4491bb",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    value: 12000,
                  },
                },
                {
                  hash: "0x1b2665363d0ed9e03050cbd67b516e67e2806554ccc765afcf99c48a05fcc757",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 1000,
                    value: 997500,
                  },
                },
                {
                  hash: "0x027f63472b791b09285ad99a078581f22ed5f7b9ad961daead21bd206bd399d4",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 300,
                    value: 500000,
                  },
                },
                {
                  hash: "0xd1532b162e524da4896bdd972583c4e17a8f5d6aebe564ca614ff2e09f67de3b",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 250,
                    value: 25000,
                  },
                },
                {
                  hash: "0x529534ea09962e5aa15a1dc1b83ae9f2cee9937329732f7285c12f9db311605c",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 130,
                    value: 130000,
                  },
                },
                {
                  hash: "0xfdf9bc6e6cb823f62e5f9a3a0c34b7c590a9da950d0df8871b87960035b213d6",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 7.11,
                    value: 15000,
                  },
                },
                {
                  hash: "0x2aeba11e40e9e187c16eb496d3f11ff0125533c0396660e38b058583123d9cb7",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 10,
                    value: 6600,
                  },
                },
                {
                  hash: "0x8bb5784f17b0348d4f596669cdc3bf0bc72253de1a46f6e8e7df6c84382273c5",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 12.391,
                    value: 7000,
                  },
                },
                {
                  hash: "0x593cd8037f7f1c89cc993fbdf42bd85c3b70c58b4cc390dd941cb3de581b7c7d",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 4.67,
                    value: 15000,
                  },
                },
                {
                  hash: "0x923171dff43f30bc5854f516e0fd7019f027a63eb3a00a3e103b2060048311e4",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 4.412740544127405,
                    value: 15000,
                  },
                },
                {
                  hash: "0x49794b2da31f414278f70d542972ac0331b9b4a1315da64ce88b8a0c71ba0322",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 98.05,
                    value: 100000,
                  },
                },
                {
                  hash: "0x2f07e6250f42a38f49a0d80b5cfec261a8f82ecefb2056a587c00f43c611472f",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 4.4303797468354436,
                    value: 10000,
                  },
                },
                {
                  hash: "0xe9a00aebba77177ac99d7e151fa218e19a40a1dc6a5503b9b43f2acc84b917da",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 0.001222161120785891,
                    value: 3,
                  },
                },
                {
                  hash: "0xc2452322959de91f0f7892c6a190c92fbfd18f1f57ef10365bc08e6291dd7f47",
                  currency: {
                    name: "Dollar",
                    type: "crypto",
                    token: "USDT",
                    amount: 1,
                    value: 0.665,
                  },
                },
                {
                  hash: "0xfc80bd7160fcec1de5f84915272e680bc573938033016764c54ad85e1209081d",
                  currency: {
                    name: "Dollar",
                    type: "crypto",
                    token: "USDT",
                    amount: 1,
                    value: 0.6651,
                  },
                },
                {
                  hash: "0x21d301e3923ca4dc6a28502f76eff8f98ced993a87a9553c09512d231c25d6e3",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 10000,
                    value: 1000,
                  },
                },
                {
                  hash: "0x866a6ff3f85a2fe80244d21e76304c5fa7effedff6a4749c36729ec0f8213cb2",
                  currency: {
                    name: "Naira",
                    type: "fiat",
                    token: "NGN",
                    amount: 3700,
                    value: 50000,
                  },
                },
              ],
            },
          ],
        },
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

    this.currency = {};
  }

  setPrice(type, token, amount) {
    this[type].find((currency) => currency.token === token).price = amount;
    this.emit("update", { token, amount  }); // notify listeners
  }

  getCurrency(token) {
    return this.currencies.find((currency) => currency.token === token);
  }

  setCurrency(token, currency) {
    this.currency[token] = currency;
  }
}

const data = new SharedData();

module.exports = data;
