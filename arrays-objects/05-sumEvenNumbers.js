//Given an array return the sum of all the even numbers

const numbers = [1, 2, 3, 4, 5, 6];

const sumEvenNumbers = (arr) => {
  return arr.reduce((acc, number) => {
    if (number % 2 === 0) {
      acc += number;
    }
    return acc;
  }, 0);
};

console.log(sumEvenNumbers(numbers));
