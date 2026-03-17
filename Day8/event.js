let heading = document.getElementById("title");
let paragraph=document.getElementsByClassName("desc");

 //click event

let button = document.querySelector("#btn");
button.addEventListener("click", function(){
alert("Button clicked!! Thank you")
});

//change text on click

button.addEventListener("click", function(){
    heading.textContent = "You clicked the button!";
});

//input event
let inputField = document.querySelector("#inputField");
let output = document.querySelector("#output");

inputField.addEventListener("input", function(){
    output.textContent = "You typed: " + inputField.value;
});

//form

let form = document.querySelector("#myForm");
form.addEventListener("submit", function(event){
    event.preventDefault(); // prevent form submission
    alert("Form submitted! Name: " + form.name.value);
});