//Total vowels in a string

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a text: ", (text) => {
  console.log(totalVowels(text));
  rl.close();
});

const totalVowels = (text) => {
  let vowels = ["a", "e", "i", "o", "u"];
  text = text.toLowerCase().split("");
  let totalVowels = 0;
  text.forEach((letter) => {
    if (vowels.indexOf(letter) !== -1) totalVowels++;
  });

  return totalVowels;
};

// console.log(totalVowels("Hello World!"));
