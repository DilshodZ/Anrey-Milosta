
/*/navbar*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-title').classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-title').classList.toggle('active');
    });
});
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-title').classList.toggle('active');
});



/*translate*/
document.addEventListener('DOMContentLoaded', function() {
const langElements = document.querySelectorAll('.lang');
const contentElements = document.querySelectorAll('[data-lang-content]');

langElements.forEach(langElement => {
    langElement.addEventListener('click', function(event) {
        event.preventDefault();

        const selectedLang = langElement.getAttribute('data-lang');

        // Remove active class from all lang elements
        langElements.forEach(el => el.classList.remove('active'));

        // Add active class to the clicked lang element
        langElement.classList.add('active');

        // Update content based on the selected language
        contentElements.forEach(contentElement => {
            if (contentElement.getAttribute('data-lang-content') === selectedLang) {
                contentElement.style.display = 'block';
            } else {
                contentElement.style.display = 'none';
            }
        });
    });
});

// Set initial language based on the first active element
const initialLangElement = document.querySelector('.lang.active') || langElements[0];
initialLangElement.click();
});
/*slayd*/
document.addEventListener('DOMContentLoaded', () => {
const mainItems = document.querySelectorAll('.carousel-main .carousel-item');
const thumbItems = document.querySelectorAll('.carousel-thumbs .thumb-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function updateCarousel(index) {
    mainItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        thumbItems[i].classList.toggle('active', i === index);
    });
}

thumbItems.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + mainItems.length) % mainItems.length;
    updateCarousel(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % mainItems.length;
    updateCarousel(currentIndex);
});

updateCarousel(currentIndex);
});









document.addEventListener('DOMContentLoaded', function() {
const mainItems = document.querySelectorAll('.carousel-main .carousel-item');
const thumbItems = document.querySelectorAll('.carousel-thumbs .thumb-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function showSlide(index) {
    mainItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    thumbItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? mainItems.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === mainItems.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

thumbItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);

        // Scroll to top of the main carousel
        document.querySelector('.carousel-main').scrollIntoView({ behavior: 'smooth' });
    });
});

showSlide(currentIndex);
});

    /*footer*/
   
// Add click event listener to the WhatsApp icon
const whatsappIcon = document.querySelector('.fa-whatsapp');
whatsappIcon.addEventListener('click', () => {
window.open('https://api.whatsapp.com/send?phone=123456789', '_blank');
});

// Add click event listener to the Instagram icon
const instagramIcon = document.querySelector('.fa-instagram');
instagramIcon.addEventListener('click', () => {
window.open('https://www.instagram.com/your_instagram_handle', '_blank');
});


console.log("Hello World!");

alert("Silar zo'r silaaaaaaaaaaa!!!")
alert("Silar zo'r silaaaaaaaaa!!!")

