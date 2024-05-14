const stepOne = (num) => {
  return new Promise((resolve, reject) => {
    resolve(num + 2);
  });
};

const stepTwo = (num) => {
  return new Promise((resolve, reject) => {
    resolve(num + 2);
  });
};

const stepThree = (num) => {
  return new Promise((resolve, reject) => {
    resolve(num + 2);
  });
};

stepOne(2)
  .then(stepTwo)
  .then(stepThree)
  .then((result) => {
    console.log(result);
  });
