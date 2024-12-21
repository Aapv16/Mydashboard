const nav = document.getElementById("nav");

// membuat even
window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 500) {
    nav.classList.add("navbar-light");
  } else if (scrollposition <= 100) {
    nav.classList.remove("navbar-light");
  }
});

// kasus
