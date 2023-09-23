let mode = document.querySelector(".mode");
let body = document.querySelector("body");

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
