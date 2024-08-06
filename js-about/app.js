let nav = document.getElementById("nav")
let bars = document.getElementById("bars")
let fas = document.getElementById("fas")

bars.addEventListener('click', () => {
    nav.classList.toggle('nav-list')
})
fas.addEventListener('click', () => {
    nav.classList.remove('nav-list')
})

// let slideindex = 1;
// showslide(slideindex);
// function one(n) {
//     showslide(slideindex += n)
// }
// function currestSlide(n) {
//     showslide(slideindex = n);
// }

// function showslide(n) {
//     let i;
//     let slide = document.getElementsByClassName("cart");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slide.length) {
//         slideindex = 1;
//     }
//     if (n < 1) {
//         slideindex = slide.length;
//     }
//     for(i = 0; i < slide.length; i++) {
//         slide[i].style.display = 'flex'
//     }
//     for(i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace("active", "");
//     }
//     slide[slideindex -1].style.display = "flex";
//     dots[slideindex -1].className += "active"
// }

let navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    let top = window.scrollY
    if (top >= 100) {
        navbar.classList.add('sticky')
    }
    if (top <= 110) {
        navbar.classList.remove('sticky')
    }
});