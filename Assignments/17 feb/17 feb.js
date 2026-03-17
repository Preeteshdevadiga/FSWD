// Typing Effect
const text = "Preetesh 👋";
let index = 0;

function typeEffect(){
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }
}
typeEffect();

// Smooth Scroll
document.querySelectorAll('.navbar a').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

// Active Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop=section.offsetTop;
        if(scrollY >= sectionTop-150){
            current=section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
});

// Scroll Animation
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.2});

document.querySelectorAll(".card").forEach(card=>{
    observer.observe(card);
});

// Dark/Light Mode
document.getElementById("themeToggle").addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
});
