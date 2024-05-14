const greeting = (name, callback) => {
  callback(name);
};

greeting("Josue", (name) => {
  console.log(`Hola ${name}`);
});
