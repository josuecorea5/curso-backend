//Given an array of words, return how many times each word appears in the array

const countingWords = (arr) => {
  let wordCount = {};
  arr.forEach((word) => {
    let phrase = word.split(" ");
    phrase.forEach((word) => {
      if (!wordCount[word]) {
        wordCount[word] = 1;
      } else {
        wordCount[word]++;
      }
    });
  });

  return wordCount;
};

console.log(
  countingWords([
    "hello world",
    "hello node",
    "hello javascript",
    "world",
    "world",
  ])
);
