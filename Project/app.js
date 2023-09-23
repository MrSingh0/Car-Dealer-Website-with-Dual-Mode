let currentSlide = 0;
let blog = document.querySelector(".blogs");
let post1 = document.querySelector(".post1");
let post2 = document.querySelector(".post2");
let post3 = document.querySelector(".post3");
let post4 = document.querySelector(".post4");
let mode = document.querySelector(".mode");
let body = document.querySelector("body");
const slides = document.querySelectorAll('.slide');


function showSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    currentSlide = slideIndex;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

showSlide(currentSlide);


let i = 0;
let id = setInterval(() => {
    i++;
    if (i === 1) {
        post1.style.display = "block";
        post2.style.display = "none";
        post3.style.display = "none";
        post4.style.display = "none";
    } else if (i === 2) {
        post1.style.display = "none";
        post2.style.display = "block";
        post3.style.display = "none";
        post4.style.display = "none";
    } else if (i === 3) {
        post1.style.display = "none";
        post2.style.display = "none";
        post3.style.display = "block";
        post4.style.display = "none";
    }
    else if (i === 4) {
        post1.style.display = "none";
        post2.style.display = "none";
        post3.style.display = "none";
        post4.style.display = "block";
    }

    if (i === 4) {
        i=0;
    }
}, 4000);

console.log(id);


let isBackgroundImage1 = true;

const imagePath = 'assests/img/images.jpeg';

let backgroundImage1 = `url(${imagePath})`;

mode.addEventListener("click", () => {
    if (isBackgroundImage1) {
        body.style.backgroundImage = backgroundImage1;
        body.style.color = "black";
    } else {
        body.style.backgroundImage = "none";
        body.style.color = "white";
    }
    
    isBackgroundImage1 = !isBackgroundImage1;
});






