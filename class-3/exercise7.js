// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese la categoria del vehiculo: ", (category) => {
      console.log(typeOfVehicleBasedOnCategory(category.toLowerCase()));
      resolve();
    });

    const typeOfVehicleBasedOnCategory = (category) => {
      if (category === "moto") {
        return "Es una mototicleta";
      } else if (category === "auto") {
        return "Es un auto";
      } else if (category === "camion") {
        return "Es un camion";
      } else if (category === "bicicleta") {
        return "Es una bicicleta";
      } else {
        return "Categoria no valida";
      }
    };
  });
};

module.exports = main;
