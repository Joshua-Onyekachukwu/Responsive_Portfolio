// Change header style on scroll
window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Toggle mobile menu
const menuIcon = document.getElementById("menu_icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


const dynamicText = document.querySelector(".dynamic-text");
const roles = ["Software Engineer", "ML Engineer", "AI Enthusiast", "Problem Solver"];
let index = 0;

function changeText() {
    dynamicText.textContent = roles[index];
    index = (index + 1) % roles.length;
}

setInterval(changeText, 3000);


// Back to Top Button Functionality
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
