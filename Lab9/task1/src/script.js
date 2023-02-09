let currentIndex = 1;
displaySlides(currentIndex);
function setSlides(num) {
  displaySlides((currentIndex += num));
}
function displaySlides(num) {
  var slides = document.getElementsByClassName("imageSlides");
  let dots = document.getElementsByClassName("dot");

  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentIndex - 1].style.display = "block";
  dots[currentIndex - 1].className += " active";
}
function currentSlide(n) {
  displaySlides((currentIndex = n));
}
