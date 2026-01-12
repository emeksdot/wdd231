const today = new Date();
const copy = document.querySelector(".copy");

copy.textContent += today.getFullYear();

const dateModified = new Date(document.lastModified);
document.querySelector(".modified").innerHTML = dateModified;
