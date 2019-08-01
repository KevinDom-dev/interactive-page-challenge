let slideIndex = 1;
ShowSlide(slideIndex);

//show the slide with the number of slideIndex
function ShowSlide(Index) {
     const slides = document.getElementsByClassName("prideslide");
     let currentslide = Index;

     // loop through slide
     if (currentslide > slides.length) {
          slideIndex = 1;
     }
     if (currentslide < 1) {
          slideIndex = slides.length;
     }

     //only display current slide
     for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }
     slides[slideIndex - 1].style.display = "block";
}

//navigate through slides
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
prev.addEventListener("click", PreviousSlide);
next.addEventListener("click", NextSlide);

function NextSlide() {
     ShowSlide((slideIndex += 1));
}
function PreviousSlide() {
     ShowSlide((slideIndex -= 1));
}
setInterval(NextSlide, 5000);

// tab
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

btn1.addEventListener("click", function() {
     display("summary");
});
btn2.addEventListener("click", function() {
     display("info");
});
btn3.addEventListener("click", function() {
     display("form");
});
btn1.click();
function display(tab) {
     const tabs = document.getElementsByClassName("tabs");
     for (let i = 0; i < tabs.length; i++) {
          tabs[i].style.display = "none";
     }
     document.getElementById(tab).style.display = "block";
     console.log("lol", tab);
}
