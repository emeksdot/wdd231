

const navButton = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-bar");
const nav = document.querySelector("nav");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navLinks.classList.toggle("show");
    nav.classList.toggle("hide");
})