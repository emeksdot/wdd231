const gridButton = document.querySelector(".gridButton");
const listButton = document.querySelector(".listButton");
const displayContainer = document.querySelector("#content");

// Function to display items as a grid
function displayGrid(contentArr) {
    displayContainer.innerHTML = "";
    contentArr.map(async content => {
        // card build goes here
        let card = document.createElement("section");
        let cardTitle = document.createElement("section");
        let cardImg = document.createElement("section");
        let cardDesc = document.createElement("section");
        let companyName = document.createElement("h2");
        let companyTag = document.createElement("h4");
        let portrait = document.createElement("img");

        let address = document.createElement("p");
        let phone = document.createElement("p");
        let webURL = document.createElement("p");

        address.innerHTML = `<span class="bold">Address:</span> ${content.address}`;
        phone.innerHTML = `<span class="bold">Phone:</span> ${content.phoneNumber}`;
        webURL.innerHTML = `<span class="bold">Web:</span> ${content.websiteURL}`;

        companyName.innerText = `${content.name}`;
        companyTag.innerText = `${content.tagLine}`;

        cardTitle.appendChild(companyName);
        cardTitle.appendChild(companyTag);

        card.setAttribute("class", "card");


        portrait.setAttribute("src", `${content.imageURL}`);
        portrait.setAttribute("alt", `Image of ${content.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", `250`);
        portrait.setAttribute("height", `350`);

        cardImg.appendChild(portrait);

        cardDesc.appendChild(address);
        cardDesc.appendChild(phone);
        cardDesc.appendChild(webURL);

        card.appendChild(cardTitle);
        card.appendChild(cardImg);
        card.appendChild(cardDesc);
        // card.appendChild(fullName);
        displayContainer.appendChild(card);

    });
}

// Function to display items as a list
function displayList(contentArr) {
    displayContainer.innerHTML = "";
    contentArr.map(async content => {
        // list card build goes here
        let listCard = document.createElement("section");
        let listName = document.createElement("p");
        let listAddress = document.createElement("p");
        let listPhone = document.createElement("p");
        let listWeb = document.createElement("p");

        listName.innerText = `${content.name}`;
        listAddress.innerText = `${content.address}`;
        listPhone.innerText = `${content.phoneNumber}`;
        listWeb.innerText = `${content.websiteURL}`;


        listCard.setAttribute("class", "listCard");
        listCard.appendChild(listName);
        listCard.appendChild(listAddress);
        listCard.appendChild(listPhone);
        listCard.appendChild(listWeb);

        displayContainer.appendChild(listCard);
    });

}

async function getGridContent() {
    try {
        const reponse = await fetch("data/members.json");
        const data = await reponse.json()
        console.log(data.members);
        displayGrid(data.members);
        // return data;
    } catch (error) {
        console.error(error);
    }
}
async function getListContent() {
    try {
        const reponse = await fetch("data/members.json");
        const data = await reponse.json()
        console.log(data.members);
        displayList(data.members);
        // return data;
    } catch (error) {
        console.error(error);
    }
}

getListContent();
gridButton.addEventListener("click", getGridContent());
// listButton.addEventListener("click", getListContent());