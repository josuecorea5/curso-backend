// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese el primer color: ", (color1) => {
      rl.question("Ingrese el segundo color: ", (color2) => {
        console.log(mixOfPrimaryColors(color1, color2));
        resolve();
      });
    });

    const mixOfPrimaryColors = (color1, color2) => {
      if (
        (color1 === "Azul" && color2 === "Amarillo") ||
        (color1 === "Amarillo" && color2 === "Azul")
      ) {
        return "Verde";
      } else if (
        (color1 === "Azul" && color2 === "Rojo") ||
        (color1 === "Rojo" && color2 === "Azul")
      ) {
        return "Morado";
      } else if (
        (color1 === "Rojo" && color2 === "Amarillo") ||
        (color1 === "Amarillo" && color2 === "Rojo")
      ) {
        return "Naranja";
      } else {
        return "Error";
      }
    };
  });
};

module.exports = main;

// console.log(mixOfPrimaryColors("Azul", "Amarillo"));
// console.log(mixOfPrimaryColors("Amarillo", "Azul"));
// console.log(mixOfPrimaryColors("Azul", "Rojo"));
// console.log(mixOfPrimaryColors("Rojo", "Azul"));
// console.log(mixOfPrimaryColors("Rojo", "Rojo"));
