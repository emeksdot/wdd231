const gridButton = document.querySelector("#grid-btn");
const listButton = document.querySelector("#list-btn");
const viewBox = document.querySelector("#display-box");

gridButton.addEventListener("click", getContent);

const displayListContent = (contentArr) => {
    document.querySelector("#display-box").innerHTML = "";
    contentArr.map(async content => {
        // list card build goes here
        let listCard = document.createElement("section");
        let listName = document.createElement("p");
        let cardImg = document.createElement("section");
        let cardDesc = document.createElement("section");
        let companyName = document.createElement("h2");
        let companyTag = document.createElement("h4");
    }

const displayContent = (contentArr) => {
    document.querySelector("#display-box").innerHTML = "";
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
        document.querySelector("#display-box").appendChild(card);



    });
}

async function getContent() {
    try {
        const reponse = await fetch("data/members.json");
        const data = await reponse.json()
        console.log(data);
        console.log(typeof data);
        console.log(Array.isArray(data));
        displayContent(data.members);
        // return data;
    } catch (error) {
        console.error(error);
    }
    // const rep = await fetch("./data/members.json");
    const data = rep.json();
    // const dataArray = await Promise.all(data);
    // displayContent(data);
}

getContent();
// displayContent(target);


