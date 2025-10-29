// ARRAY

const student1 = "Sarnai";
const student2 = "Hosoo";
const student3 = "Nyam";
//   0        1        2
const allStudents = ["Sarnai", "Hosoo", "Nyam"]; // array massiv

console.log(allStudents);

allStudents[1] = "Bataa";

console.log(allStudents);

allStudents[3] = "Erka";

console.log(allStudents);

const info = ["Sarnai", 21, true, "female"];

// OBJECT
const phone = {
  name: "Iphone 12",
  color: "Black",
  price: "1000$",
};

const student = {
  name: "Sarnai",
  age: 21,
  gender: "female",
};

const classStudents = [
  { name: "Sarnai", age: 21, gender: "female" }, // 0
  { name: "Hosoo", age: 20, gender: "male" }, // 1
  { name: "Bataa", age: 19, gender: "male" }, // 2
];

console.log(classStudents[1].name);
