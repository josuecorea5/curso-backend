//Given an array of people filter out the people by name

const people = [
  { name: "John", age: 21, genre: "Male" },
  { name: "Jane", age: 20, genre: "Female" },
  { name: "Lucas", age: 22, genre: "Male" },
  { name: "Maria", age: 23, genre: "Female" },
];

const filterPersonByName = (arr, name) => {
  return arr.filter((person) => person.name === name);
};

console.log(filterPersonByName(people, "Lucas"));
