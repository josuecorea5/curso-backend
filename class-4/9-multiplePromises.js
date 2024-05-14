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

multiply(10, 2).then((result) => {
  console.log("Multiplicacion", result);
});

sum(10, 2).then((result) => {
  console.log("Suma", result);
});

substraction(10, 2).then((result) => {
  console.log("Resta", result);
});
