const readline = require("readline");
const exercise1 = require("./exercise1");
const exercise2 = require("./exercise2");
const exercise3 = require("./exercise3");
const exercise4 = require("./exercise4");
const exercise5 = require("./exercise5");
const exercise6 = require("./exercise6");
const exercise7 = require("./exercise7");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  console.log("Elige una opcion entre 1 y 7");
  for (let i = 1; i <= 7; i++) {
    console.log(`${i}. Ejercicio ${i}`);
  }

  rl.question("Inserte el numero de ejercicio a ejecutar: ", (number) => {
    switch (Number(number)) {
      case 1:
        exercise1(rl).then(() => {
          main();
        });
        break;
      case 2:
        exercise2(rl).then(() => {
          main();
        });
        break;
      case 3:
        exercise3(rl).then(() => {
          main();
        });
        break;
      case 4:
        exercise4(rl).then(() => {
          main();
        });
        break;
      case 5:
        exercise5(rl).then(() => {
          main();
        });
        break;
      case 6:
        exercise6(rl).then(() => {
          main();
        });
        break;
      case 7:
        exercise7(rl).then(() => {
          main();
        });
        break;
      default:
        console.log("Ejercicio no encontrado");
        rl.close();
        break;
    }
  });
};

main();
