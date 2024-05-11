//Given an array return a new array with the square of each number using the map method

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = (arr) => {
  return arr.map((number) => number * number);
};

console.log(squareNumbers(numbers));
