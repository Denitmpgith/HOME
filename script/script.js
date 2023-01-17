// let slideIndex = 0;
// let timeoutId = null;
// const slides = document.getElementsByClassName("mySlides");
// // const dots = document.getElementsByClassName("dot");

// showSlides();
// function currentSlide(index) {
//   slideIndex = index;
//   showSlides();
// }
// function plusSlides(step) {
//   if (step < 0) {
//     slideIndex -= 2;

//     if (slideIndex < 0) {
//       slideIndex = slides.length - 1;
//     }
//   }

//   showSlides();
// }
// function showSlides() {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     // dots[i].classList.remove("active");
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   // dots[slideIndex - 1].classList.add("active");
//   if (timeoutId) {
//     clearTimeout(timeoutId);
//   }
//   timeoutId = setTimeout(showSlides, 1000); // Change image every 5 seconds
// }

addEventListener("click", function () {
  var el = document.documentElement,
    rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
  rfs.call(el);
});
// Find the right method, call on correct element
function launchFullScreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}
// Launch fullscreen for browsers that support it!
launchFullScreen(document.documentElement); // the whole page
launchFullScreen(document.getElementById("videoElement")); // any individual element
