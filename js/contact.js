const menu = document.querySelector(".menu")
const navbar = document.querySelector(".nav-list");
const x = document.querySelector(".x");

menu.addEventListener("click", () => {
    navbar.classList.toggle("nav-fix")
})
x.addEventListener("click", () => {
    navbar.classList.remove("nav-fix")
})

const ANavbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    let top = window.scrollY;
    if (top >= 100) {
        ANavbar.style.position = "fixed"
    }
    if (top <= 100) {
        ANavbar.style.position = "sticky"
    } 
    
})