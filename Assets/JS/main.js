let slideIndex = 1;
ShowSlide(slideIndex);

//show the slide with the number of slideIndex
function ShowSlide(Index) {
     const slides = document.getElementsByClassName("prideslide");
     let currentslide = Index;

     //return to first slide
     if (currentslide > slides.length) {
          slideIndex = 1;
     }

     //return to last slide
     if (currentslide < 1) {
          slideIndex = slides.length;
     }

     //turn off all slides
     for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }

     //display current slide
     slides[slideIndex - 1].style.display = "block";
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", PreviousSlide);
next.addEventListener("click", NextSlide);

//go to next slide
function NextSlide() {
     ShowSlide((slideIndex += 1));
}

//go to previous slide
function PreviousSlide() {
     ShowSlide((slideIndex -= 1));
}

//go to next slide every 5s
setInterval(NextSlide, 5000);
