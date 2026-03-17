// 1️⃣ map() – Transform Data
let num = [1, 2, 3, 4];

let doubled = num.map(function(n) {
return n * 2;
});

console.log(doubled);


// 2️⃣ filter() – Select Data
let even = num.filter(function(n) {
return n % 2 === 0;
});

console.log(even);

//reduce method - combine values
let sum = num.reduce(function(sum,nums) {
return sum + nums;
});
console.log(sum);

//find() -find one item
let result = num.find(function(nums) {
return nums > 2;
});
console.log(result);

//includes() - check if value exists
console.log(num.includes(3)); 