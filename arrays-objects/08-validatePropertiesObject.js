//Validate if an object has all the properties

class Student {
  constructor(name, age, cellphone) {
    this.name = name;
    this.age = age;
    this.cellphone = cellphone;
  }
}

const validateObject = (obj) => {
  const validateObject = Object.values(obj).some(
    (value) => value === undefined
  );
  return validateObject ? "The object is not valid" : "The object is valid";
};

const student = new Student("John", 21, "77432299");

console.log(validateObject(student));
