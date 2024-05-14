const multiplyPromise = (a, b, callback) => {
  return new Promise((resolve, reject) => {
    const result = a * b;
    callback(result);
    resolve();
  });
};

multiplyPromise(2, 3, (result) => {
  console.log(result);
}).then(() => console.log("Promise resolved"));
