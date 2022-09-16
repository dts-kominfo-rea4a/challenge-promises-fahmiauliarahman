const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  let counter = 0;

  return promiseTheaterIXX()
    .then(
      (res) => (counter += res.filter((item) => item.hasil === emosi).length)
    )
    .then(() => {
      return promiseTheaterVGC().then(
        (res) => (counter += res.filter((item) => item.hasil === emosi).length)
      );
    });
};

module.exports = {
  promiseOutput,
};
