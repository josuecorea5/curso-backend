// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese el primer color: ", (color1) => {
      rl.question("Ingrese el segundo color: ", (color2) => {
        console.log(
          mixOfPrimaryColors(color1.toLowerCase(), color2.toLowerCase())
        );
        resolve();
      });
    });

    const mixOfPrimaryColors = (color1, color2) => {
      if (
        (color1 === "azul" && color2 === "amarillo") ||
        (color1 === "amarillo" && color2 === "azul")
      ) {
        return "verde";
      } else if (
        (color1 === "azul" && color2 === "rojo") ||
        (color1 === "rojo" && color2 === "azul")
      ) {
        return "morado";
      } else if (
        (color1 === "rojo" && color2 === "amarillo") ||
        (color1 === "amarillo" && color2 === "rojo")
      ) {
        return "naranja";
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
