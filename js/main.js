// Loader  //--===== Loader =====--
let preloader = document.getElementById("preloader");

// Functions
function loader() {
  preloader.style.display = "none";
}
// Call the loader function when the window loads
window.onload = loader;

// Toggling site content page using jQuery
$(document).ready(function () {
  //--===== Navbar =====--
  $(".nav__trigger").click(function () {
    $(".site__content__wrapper").toggleClass("scaled");
  });
});

const ticker = document.getElementById("noticeTicker");
const notices = ticker.children;
let currentIndex = 0;

function rotateNotices() {
  for (let i = 0; i < notices.length; i++) {
    notices[i].style.transform = `translateY(-${currentIndex * 100}%)`;
  }
  currentIndex = (currentIndex + 1) % notices.length;
}

setInterval(rotateNotices, 3000);

function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const counter = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);
    if (start >= target) {
      element.textContent = target;
      clearInterval(counter);
    }
  }, 16);
}

// Intersection Observer for animation trigger
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(document.getElementById("studentCount"), 2500);
      animateCounter(document.getElementById("facultyCount"), 150);

      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector(".counter__container"));
