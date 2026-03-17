//notes is Book
//TASK
// Even or Odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Print numbers
function printNumbers(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}

// Square function
function square(num) {
    return num * num;
}

// Main
let number = 5;

console.log(number + " is " + checkEvenOdd(number));
printNumbers(number);
console.log("Square is: " + square(number));