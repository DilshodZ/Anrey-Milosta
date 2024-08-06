let nav = document.getElementById("nav")
let bars = document.getElementById("bars")
let fas = document.getElementById("fas")

bars.addEventListener('click', () => {
    nav.classList.toggle('nav-list')
})
fas.addEventListener('click', () => {
    nav.classList.remove('nav-list')
})