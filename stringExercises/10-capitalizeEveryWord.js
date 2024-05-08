//Given a string capitalize the first letter of each word.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a text: ", (text) => {
  console.log(capitalizeEveryWord(text));
  rl.close();
});

const capitalizeEveryWord = (text) => {
  text = text.toLowerCase().split(" ");
  let newText = [];
  text.forEach((word) => {
    newText.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  return newText.join(" ");
};

// console.log(capitalizeEveryWord("hello world!"));
// console.log(capitalizeEveryWord("this is a test"));
