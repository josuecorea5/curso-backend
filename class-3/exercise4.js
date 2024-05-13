// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese el numero: ", (num) => {
      console.log(isOddOrEven(Number(num)));
      resolve();
    });

    const isOddOrEven = (num) => {
      if (num % 2 === 0) {
        return "Numero par";
      } else {
        return "Numero impar";
      }
    };
  });
};

module.exports = main;
