// 1️⃣ Students Array
let students = [
  { name: 'aman', marks: 85 },
  { name: 'riya', marks: 92 },
  { name: 'john', marks: 60 },
  { name: 'joe', marks: 78 }
];

// 2️⃣ Get Students Above 80
let toppers = students.filter(function(student) {
  return student.marks > 80;
});

// 3️⃣ Get Only Names
let names = students.map(function(student) {
  return student.name;
});

// 4️⃣ Get Total Marks
let total = students.reduce(function(sum, student) {
  return sum + student.marks;
}, 0);

// 5️⃣ Print Everything
console.log("Toppers:", toppers);
console.log("Names:", names);
console.log("Total Marks:", total);
