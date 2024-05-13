// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Insert a number: ", (number) => {
      console.log(positiveNegativeOrZero(Number(number)));
      resolve();
    });

    const positiveNegativeOrZero = (number) => {
      if (number > 0) {
        return "Positivo";
      } else if (number < 0) {
        return "Negativo";
      } else {
        return "zero";
      }
    };
  });
};

module.exports = main;
