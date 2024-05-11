//Given an array of objects and a property, return the array ordered by that property
const people = [
  { name: "John", age: 21, genre: "Male" },
  { name: "Jane", age: 20, genre: "Female" },
  { name: "Lucas", age: 22, genre: "Male" },
  { name: "Maria", age: 23, genre: "Female" },
  { name: "Ana", age: 40, genre: "Female" },
];

const orderByProperty = (arr, property) => {
  return arr.sort((a, b) => a[property] - b[property]);
};

console.log(orderByProperty(people, "age"));
