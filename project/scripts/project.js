
let lastModif = new Date(document.lastModified);
const modified = document.querySelector("#lastModified");
modified.innerHTML = lastModif;


// Create array of Product objects




// Create the Product cards

const card = document.createElement('section');



const dataLink = "https://emeksdot.github.io/wdd231/project/data/products.json";

const cardContainer = document.querySelector(".cardList");

async function getProductData() {
  const response = await fetch(dataLink);
  const data = await response.json();
    console.log(data.products);
  displayProducts(data.products);
}

const displayProducts = (prodArray) => {
    prodArray.forEach((prophet) => {
    const section = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const dateOfBirth = document.createElement("p");
    const placeOfBirth = document.createElement("p");
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeOfBirth.textContent = ` Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", `lazy`);
    portrait.setAttribute("width", `321px`);
    portrait.setAttribute("height", `397px`);

    section.appendChild(fullName);
    section.appendChild(dateOfBirth);
    section.appendChild(placeOfBirth);
    section.appendChild(portrait);

    cards.appendChild(section);

    // portrait.alt = `${prophet.}`
  });
};

getProductData();
