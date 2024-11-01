
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
