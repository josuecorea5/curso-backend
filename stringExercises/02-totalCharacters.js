//Get the length of the string inserted by the user

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a text: ", (text) => {
  console.log(totalCharacters(text));
  rl.close();
});

const totalCharacters = (text) => {
  return text.length;
};

// console.log(totalCharacters("Hello World!"));
