const button = document.getElementById("contactBtn");

button.addEventListener("click", function() {
    alert("Thanks for visiting! Email me at your@email.com");
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() { //this works because javascript inline style has higher priority than css. so if default property set by css is none and then javascript says flex, computer will go by flex. 
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

faders.forEach(section => {
    observer.observe(section);
});