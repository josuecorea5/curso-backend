// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese el numero: ", (number) => {
      console.log(factorial(Number(number)));
      resolve();
    });

    const factorial = (n) => {
      let result = 1;
      if (n === 0 || n === 1) return result;
      for (let i = n - 1; i >= 1; i--) {
        result += result * i;
      }
      return result;
    };
  });
};

module.exports = main;
