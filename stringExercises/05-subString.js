//Get a user's string and create a substring base on the user's index provided.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a text: ", (text) => {
  rl.question(
    "Insert the index where you want to start the substring: ",
    (startIndex) => {
      console.log(getSubString(text, Number(startIndex)));
      rl.close();
    }
  );
});

const getSubString = (text, startIndex) => {
  return text.slice(startIndex);
};

// console.log(getSubString("Hello World", 6));
