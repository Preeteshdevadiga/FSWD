// Difference Between Variable, Array & Object

// Variable → Stores single value

// Array → Stores multiple values in one variable

// Object → Stores structured data (key–value pair)

// ✅ ARRAYS IN JS
// 🔹 Creating Array
let fruits = ['apple', 'banana', 'mango'];
console.log(fruits);

// 🔹 Accessing Elements
console.log(fruits[1]); // banana

// 🔹 Modify Element
fruits[1] = 'orange';
console.log(fruits);

// ✅ Array Properties & Methods
// 1️⃣ length
console.log(fruits.length);

// 2️⃣ push() – Add at end
fruits.push('grapes');
console.log(fruits);

// 3️⃣ pop() – Remove from end
fruits.pop();
console.log(fruits);

// 4️⃣ unshift() – Add at beginning
fruits.unshift('pineapple');
console.log(fruits);

// 5️⃣ shift() – Remove from beginning
fruits.shift();
console.log(fruits);

// ✅ Looping Through Array
// 🔹 for loop
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

// 🔹 for...of (Modern Way)
for (let fruit of fruits) {
console.log(fruit);
}

// ✅ splice() Method
// Syntax:
//array.splice(startIndex, deleteCount, item1, item2);

// 🔹 Insert
fruits.splice(1, 0, 'orange');
console.log(fruits);

// 🔹 Delete
fruits.splice(2, 1);
console.log(fruits);

// 🔹 Replace
fruits.splice(1, 1, 'grapes');
console.log(fruits);

// 🔹 Insert Multiple
let numbers = [1, 2, 5, 6];
numbers.splice(2, 0, 3, 4);
console.log(numbers);

// ✅ splice() vs slice()
// splice()	slice()
// Modifies original array	Does NOT modify original array