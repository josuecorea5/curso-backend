// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const months = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese el numero del mes: ", (number) => {
      console.log(nameOfTheMonthBasedOnNumber(Number(number)));
      resolve();
    });
    const nameOfTheMonthBasedOnNumber = (number) => {
      return months[number];
    };
  });
};

module.exports = main;
