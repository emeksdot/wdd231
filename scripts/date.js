const options = {
    day: "numeric",
    month: "short",
    year: "numeric"
};



const datePlace = document.querySelector("#dateYear");
datePlace.textContent = new Date().getFullYear();

const dateOfModification = document.querySelector("#lastModified");
dateOfModification.innerHTML = document.lastModified;