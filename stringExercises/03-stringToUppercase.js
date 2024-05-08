//Transform the user's string to uppercase

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a text: ", (text) => {
  console.log(stringToUppercase(text));
  rl.close();
});

const stringToUppercase = (text) => {
  return text.toUpperCase();
};

// console.log(stringToUppercase("welcome to node.js!"));
