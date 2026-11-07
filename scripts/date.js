// Option Object
const options = {
    day: "numeric",
    month: "short",
    year: "numeric"
};

const datePlace = document.querySelector("#dateYear");
datePlace.textContent = new Date().getFullYear();

const dateOfModificationNew = document.querySelector("#lastModified");
dateOfModificationNew.innerHTML = document.lastModified;