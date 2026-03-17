// 🔹 Creating Object
let student = {
name: 'Ravi',
age: 10,
course: 'FSWD'
};

// console.log(student);

//  Accessing Data
// Dot Method
console.log(student.name);

// Bracket Method
console.log(student['age']);

//  Modify Object
student.age = 23;          // replace
student.city = 'Hyderabad'; // add new key
console.log(student);

//  Looping Object
for (let key in student) {
console.log(key, ":", student[key]);
}
