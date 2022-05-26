/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sr = ScrollReveal({
  duration: 2000,
  reset: false,
});
sr.reveal(`.fontleft`, {
  origin: "top",
  distance: "20px",
});
sr.reveal(`.right,.right3`, {
  origin: "button",
  distance: "10px",
});
sr.reveal(`.tex`, {
  origin: "left",
  distance: "10px",
});
sr.reveal(`.left4,.left3,.Ta4,.line`, {
  origin: "left",
  distance: "10px",
});
sr.reveal(`.right4,.top`, {
  origin: "top",
  distance: "20px",
});
sr.reveal(`.middle3`, {
  origin: "bottom",
  distance: "20px",
});
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 150) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
