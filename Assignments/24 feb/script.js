let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").innerText = currentInput;
    console.log(`Input added: ${value} | Current string: ${currentInput}`);
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").innerText = "0";
    console.clear();
    console.log("Console cleared.");
}

function calculate() {
    try {
        // eval() takes the string and treats it as math
        const result = eval(currentInput); 
        
        console.log("--- Calculation ---");
        console.log(`Equation: ${currentInput}`);
        console.log(`Result: ${result}`);
        console.log("-------------------");
        
        document.getElementById("display").innerText = result;
        currentInput = result.toString();
    } catch (error) {
        console.error("Invalid Math Expression");
        document.getElementById("display").innerText = "Error";
        currentInput = "";
    }
}