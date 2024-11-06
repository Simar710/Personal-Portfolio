// slideshow.js

export function startSlideshow(slideId) {
  if (typeof window !== 'undefined') {
    let slideIndex = 0;
    showSlides(slideId, slideIndex);
  }
}

function showSlides(slideId, index) {
  if (typeof document !== 'undefined') {
    const slides = document.getElementById(slideId).getElementsByClassName("project-slide");
    const dots = document.getElementById(slideId).getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    index++;
    if (index > slides.length) {
      index = 1;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";

    setTimeout(() => showSlides(slideId, index), 2000);
  }
}

// Exporting the function makes this file a module
