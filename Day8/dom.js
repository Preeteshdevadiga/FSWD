// select by ID
let heading = document.getElementById("title");
console.log(heading);

// select by class (returns HTMLCollection)
let paragraph = document.getElementsByClassName("desc");
console.log(paragraph[0]);

// modern method
let head = document.querySelector("#title");
let para = document.querySelector(".desc");

// changing the content
heading.textContent = "DOM is Powerful";
para.innerHTML = "<b>This is updated text</b>";

// changing styles
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";

// creating new element
let newPara = document.createElement("p");
newPara.textContent = "I am a new Paragraph";
document.body.appendChild(newPara);

// removing element
newPara.remove();