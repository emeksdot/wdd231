const dateObj = new Date();
console.log(dateObj)

let currentYear = document.querySelector("#currentyear");
currentYear.textContent = dateObj.getFullYear()
