let slideIndex = 1;
ShowSlide(slideIndex);

//go to next slide
function NextSlide() {
     ShowSlide((slideIndex += 1));
}

//go to previous slide
function PreviousSlide() {
     ShowSlide((slideIndex -= 1));
}

//show the slide with the number of slideIndex
function ShowSlide(slideIndex) {
     const slides = document.getElementsByClassName("prideslide");
     let currentslide = slideIndex;

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
     //  console.log(slides);
     //display current slide
     slides[slideIndex].style.display = "block";
}
