const dateObj = new Date();
console.log(dateObj)

let currentYear = document.querySelector("#currentyear");
currentYear.textContent = dateObj.getFullYear();

const hamburger = document.querySelector("#mode");
const navLinks = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navLinks.classList.toggle("show");
});


let lastModif = new Date(document.lastModified);
const modified = document.querySelector("#lastModified");
modified.innerHTML = lastModif;

