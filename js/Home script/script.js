var swiper = new Swiper(".cards-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".table-all3", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const en = document.querySelector(".en")
const ru = document.querySelector(".ru")
const ro = document.querySelector(".ro")

en.addEventListener("click", () => {
    en.style.background = "#323012"
    en.style.color = "#fff"
    if(en.style.background == "#323012" || en.style.color == "white") {
        ru.style.background = "transparent"
        ru.style.color = "#000"
        ro.style.background = "transparent"
        ro.style.color = "#000"
    } else {
        ru.style.background = "transparent"
        ru.style.color = "#000"
        ro.style.background = "transparent"
        ro.style.color = "#000"
    }
})
ru.addEventListener("click", () => {
    ru.style.background = "#323012"
    ru.style.color = "white"
    if(ru.style.background == "#323012" || ru.style.color == "white") {
        en.style.background = "transparent"
        en.style.color = "#000"
        ro.style.background = "transparent"
        ro.style.color = "#000"
    }
})
ro.addEventListener("click", () => {
    ro.style.background = "#323012"
    ro.style.color = "white"
    if(ro.style.background == "#323012" || ro.style.color == "white") {
        en.style.background = "transparent"
        en.style.color = "#000"
        ru.style.background = "transparent"
        ru.style.color = "#000"
    }
})

const en2 = document.querySelector(".en2")
const ru2 = document.querySelector(".ru2")
const ro2 = document.querySelector(".ro2")

en2.addEventListener("click", () => {
    en2.style.background = "#323012"
    en2.style.color = "#fff"
    if(en2.style.background == "#323012") {
        ru2.style.background = "transparent"
        ru2.style.color = "#000"
        ro2.style.background = "transparent"
        ro2.style.color = "#000"
    } else {
        ru2.style.background = "transparent"
        ru2.style.color = "#000"
        ro2.style.background = "transparent"
        ro2.style.color = "#000"
    }
})
ru2.addEventListener("click", () => {
    ru2.style.background = "#323012"
    ru2.style.color = "#fff"
    if(ru2.style.background == "#323012") {
        en2.style.background = "transparent"
        en2.style.color = "#000"
        ro2.style.background = "transparent"
        ro2.style.color = "#000"
    }
})
ro2.addEventListener("click", () => {
    ro2.style.background = "#323012"
    ro2.style.color = "#fff"
    if(ro2.style.background == "#323012") {
        en2.style.background = "transparent"
        en2.style.color = "#000"
        ru2.style.background = "transparent"
        ru2.style.color = "#000"
    }
})

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
    if (top >= 200) {
        ANavbar.style.position = "fixed"
    }
    if (top <= 100) {
        ANavbar.style.position = "sticky"
    } 
    
})
function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6Lc6MyEqAAAAACvJvzC0s49xJMBxToP0CNqvkj1U', {action: 'LOGIN'});
    });
  }