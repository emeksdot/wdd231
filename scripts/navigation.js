

const navButton = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-bar");

navButton.addEventListener("click", () => {
    navButton.     .toggle("show");
    navLinks.classList.toggle("show");
})