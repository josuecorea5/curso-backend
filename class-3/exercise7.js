// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const main = (rl) => {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese la categoria del vehiculo: ", (category) => {
      console.log(typeOfVehicleBasedOnCategory(category));
      resolve();
    });

    const typeOfVehicleBasedOnCategory = (category) => {
      if (category === "Moto") {
        return "Es una moto";
      } else if (category === "Auto") {
        return "Es un auto";
      } else if (category === "Camion") {
        return "Es un camion";
      } else if (category === "Bicicleta") {
        return "Es una bicicleta";
      }
    };
  });
};

module.exports = main;
