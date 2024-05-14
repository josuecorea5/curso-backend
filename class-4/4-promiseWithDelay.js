const promiseWithDelay = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa con delay resuelta");
    }, delay);
  });
};

promiseWithDelay(3000).then((result) => console.log(result));
