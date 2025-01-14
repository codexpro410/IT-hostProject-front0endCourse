const hamburger = document.getElementById("hamburger");
const x = document.getElementById("x");
const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
const navLi = document.querySelectorAll("nav ul li");

hamburger.addEventListener("click", () => {
  nav.style.flexDirection = "column";
  navUl.style.flexDirection = "column";
  navLi.forEach((li) => (li.style.display = "flex"));
  hamburger.innerHTML = "X";
});
