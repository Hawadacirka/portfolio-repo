// the image slider which the images names and could be selector in order
const image = document.querySelector(".slide-image");
const numberEl = document.querySelector(".numberel");
const totalEl = document.querySelector(".totalel");
const prevBtn = document.querySelector(".backward");
const nextBtn = document.querySelector(".forward");

// the images in order 
const images = [
  "./images/BlackJack.png",
  "./images/calculator.png",
  "./images/ClickableSounds.png",
];

// page load
let currentImage = 0;

// the webpage loads
window.addEventListener("DOMContentLoaded", showImage);

// select and change the images
function showImage() {
  image.src = images[currentImage];
  numberEl.textContent = currentImage + 1;
  totalEl.textContent = images.length;
}

// the next button works when it is clickable
nextBtn.addEventListener("click", function () {
    currentImage++;
    if (currentImage > images.length - 1) {
      currentImage = 0;
    }
    showImage(currentImage);
  });
  
  // the prev button works when it is clickable
  prevBtn.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    showImage(currentImage);
  });
  
