// FOOTER YEAR
const date = document.getElementById("date");
const currentYear = new Date().getFullYear();
date.innerHTML = currentYear;

// NAVBAR
const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => {
  navBar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
});
