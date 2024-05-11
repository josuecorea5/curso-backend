//Given a list of students and teachers, generate a combined list of the community

const students = [
  { name: "John", age: 21, cellphone: "77432299" },
  { name: "Jane", age: 20, cellphone: "77432299" },
  { name: "Lucas", age: 22, cellphone: "77432299" },
  { name: "Maria", age: 23, cellphone: "77432299" },
];

const teachers = [
  { name: "Ana", age: 40, cellphone: "77432299" },
  { name: "Paul", age: 35, cellphone: "77432299" },
  { name: "Laura", age: 30, cellphone: "77432299" },
  { name: "Carlos", age: 45, cellphone: "77432299" },
];

const communityList = (studentList, teacherList) => {
  return [...studentList, ...teacherList];
};

console.log(communityList(students, teachers));
