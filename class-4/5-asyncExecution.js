const asyncExecution = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

asyncExecution(() => console.log("Callback despues de 2 segundos"));
