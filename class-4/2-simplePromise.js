const multiplyPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a * b;
    if (isNaN(result)) {
      reject("No se puede multiplicar");
    } else {
      resolve(result);
    }
  });
};

multiplyPromise(2, 3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
