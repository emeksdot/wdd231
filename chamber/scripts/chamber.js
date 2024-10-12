const hamburger = document.querySelector(".ham-icon");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  ul.classList.toggle("hide");
//   ul.classList.toggle("open");
});
