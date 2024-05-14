const multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a * b;
    resolve(result);
  });
};

const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a + b;
    resolve(result);
  });
};

const substraction = (a, b) => {
  return new Promise((resolve, reject) => {
    const result = a - b;
    resolve(result);
  });
};

const combinedPromises = async () => {
  const [multiplyResult, sumResult, substractionResult] = await Promise.all([
    multiply(10, 2),
    sum(8, 5),
    substraction(20, 15),
  ]);

  console.log("Multiplicacion", multiplyResult);
  console.log("Suma", sumResult);
  console.log("Resta", substractionResult);
  console.log("Accion final");
};

combinedPromises();
