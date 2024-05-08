//Taking a user's string and inverting it.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a text: ", (text) => {
  console.log(invertString(text));
  rl.close();
});

const invertString = (text) => {
  return text.split("").reverse().join("");
};

// console.log(invertString("Hello World!"));
