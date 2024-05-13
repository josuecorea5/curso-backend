// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese el primer numero: ", (num1) => {
      rl.question("Ingrese el segundo numero: ", (num2) => {
        rl.question("Ingrese el tercer numero: ", (num3) => {
          console.log(
            calculateMaxNumberBetweenThree(
              Number(num1),
              Number(num2),
              Number(num3)
            )
          );
          resolve();
        });
      });
    });
    const calculateMaxNumberBetweenThree = (num1, num2, num3) => {
      let max = "";
      if (
        (num1 === num2 && num1 === num3) ||
        (num2 === num1 && num2 === num3) ||
        (num3 === num1 && num3 === num2)
      ) {
        max = "Los numeros son iguales";
        return max;
      }

      if (num1 > num2 && num1 > num3) {
        max = `El numero mayor es el primero: ${num1}`;
      } else if (num2 > num1 && num2 > num3) {
        max = `El numero mayor el el segundo: ${num2}`;
      } else if (num3 > num1 && num3 > num2) {
        max = `El numero mayor es el tercero: ${num3}`;
      }

      return max;
    };
  });
};

module.exports = main;
