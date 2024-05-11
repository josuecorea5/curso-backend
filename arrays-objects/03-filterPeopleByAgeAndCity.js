//Given an array of people, return an array of people who are older than 30 and live in a specific city

const people = [
  { name: "Sergio", age: 25, city: "San Miguel" },
  { name: "Martha", age: 32, city: "San Miguel" },
  { name: "Sonia", age: 35, city: "Sonsonate" },
  { name: "Marlene", age: 40, city: "Chalatenango" },
  { name: "Rosa", age: 45, city: "Cabañas" },
];

const peopleOlderThan30AndLivingInSpecificCity = (arr, city) => {
  return arr.filter((person) => person.age > 30 && person.city === city);
};

console.log(peopleOlderThan30AndLivingInSpecificCity(people, "San Miguel"));
