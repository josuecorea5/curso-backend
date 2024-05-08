//Counting the total of words in a string

const readline = require("readline");
const { text } = require("stream/consumers");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a text: ", (text) => {
  console.log(totalOfWordsInAString(text));
  rl.close();
});

const totalOfWordsInAString = (text) => {
  text = text.split(" ");
  let totalWords = 0;
  text.forEach((word) => {
    if (word.length > 0) totalWords++;
  });
  return totalWords;
};

// console.log(
//   totalOfWordsInAString("Hello this is just          an example            ")
// );
