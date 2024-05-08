//Test if the word is a palindrome

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insert a word: ", (word) => {
  console.log(isPalindrome(word));
  rl.close();
});

const isPalindrome = (word) => {
  let reverseWord = "";
  word = word.toLowerCase();
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  return word === reverseWord;
};

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
