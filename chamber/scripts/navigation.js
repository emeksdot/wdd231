const navButton = document.querySelector("#ham-btn"); // do this first
const navLinks = document.querySelector("#nav-bar");
const navBox = document.querySelector(".nav-box");

// Toggle the show class off and on
navButton.addEventListener("click", () => {
  navButton.classList.toggle("show"); // Done first
  navLinks.classList.toggle("show");
  navBox.appendChild(navLinks);
});

// DATE MODIFIED
const today = new Date();
// const copy = document.querySelector(".copy");

// copy.textContent += today.getFullYear();

const dateModified = new Date(document.lastModified);
document.querySelector(".modified").innerHTML = dateModified;
