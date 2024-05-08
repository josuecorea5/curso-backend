//Request to user a string, a word to replace and a new word to replace the old one.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a text: ", (text) => {
  rl.question("Insert the word you want to replace: ", (oldWord) => {
    rl.question("Insert the new word: ", (newWord) => {
      console.log(replaceSpecificString(text, oldWord, newWord));
      rl.close();
    });
  });
});

const replaceSpecificString = (text, oldWord, newWord) => {
  return text.replace(oldWord, newWord);
};

// console.log(replaceSpecificString("Hello World!", "World", "Node.js"));
