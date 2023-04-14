let a = 0;
slides = document.getElementsByClassName("slide");

function showSlide(index) {

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";
}

function prevSlide() {
  a--;
  if (a < 0) {
    a = slides.length - 1;
  }
  showSlide(a);
}

function nextSlide() {
  a++;
  if (a >= slides.length) {
    a = 0;
  }
  showSlide(a);
}










