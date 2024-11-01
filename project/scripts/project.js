
let lastModif = new Date(document.lastModified);
const modified = document.querySelector("#lastModified");
modified.innerHTML = lastModif;


// Create array of Product objects




// Create the Product cards

const card = document.createElement('section');

// const newLink = "https://github.com/emeksdot/wdd231/blob/main/project/data/products.json";
const newLink =" https://github.com/emeksdot/wdd231/blob/c32a3a51b00f9a910058adb0d6274e71b4d1224d/project/data/products.json";


https://raw.githubusercontent.com/emeksdot/wdd231/refs/heads/main/project/data/products.json



const dataLink = "https://emeksdot.github.io/wdd231/project/data/products.json";

const cardContainer = document.querySelector(".cardList");

async function getProductData() {
  const response = await fetch(newLink);
  const data = await response.json();
    console.log(data.products);
  displayProducts(data.products);
}






const displayProducts = (prodArray) => {
    prodArray.forEach((value, key) => {
        let newCard = document.createElement("section");
        // newPiece.classList.add("item");
        newPiece.innerHTML = `
            <img src="${value.images}">
            <p class="title">${value.name}</p>
            <p class="price">${value.price.toLocaleString()}</p>
            <button onclick="addToCart(${key})">Add To Cart</button>    
        `;
        shoppingList.appendChild(newPiece);
      });
};

getProductData();
