function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
/*
let galleryIndex = 0;
gallerySlides();

function gallerySlides() {
  let i;
  let slides = document.getElementsByClassName("fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  galleryIndex++;
  if (galleryIndex > slides.length) {
    galleryIndex = 1;
  }

  slides[galleryIndex - 1].style.display = "block";
  setTimeout(gallerySlides, 2000); // Change image every 2 seconds
}*/

var slideIndex = [1, 1, 1, 1];
var slideId = ["slide1", "slide2", "slide3", "slide4"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
