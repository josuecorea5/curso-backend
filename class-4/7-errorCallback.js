const divide = (a, b, callback) => {
  if (b === 0) {
    callback("No se puede dividir por 0");
  } else {
    const result = a / b;
    callback(null, result);
  }
};

divide(10, 2, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

divide(10, 0, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
