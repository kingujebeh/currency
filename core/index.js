const data = require("../data");
const { updateData } = require("../func");

const init = async () => {
  await updateData();
  console.log(data);
};

module.exports = { init };
