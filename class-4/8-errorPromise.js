const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("No se puede dividir por 0");
    } else {
      const result = a / b;
      resolve(result);
    }
  });
};

divide(10, 2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

divide(10, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
