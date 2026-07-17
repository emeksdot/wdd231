const gridButton = document.querySelector("#grid-btn");
const listButton = document.querySelector("#list-btn");
const viewBox = document.querySelector("#display-box");
viewBox.innerText = "Lalas";


const displayContent = (contentArr) => {
    document.querySelector("#display-box").innerHTML = "";
    contentArr.map(async content => {
        // card build goes here
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        fullName.innerText = `${content.name}`;
        portrait.setAttribute("src", `${content.imageURL}`);
        portrait.setAttribute("alt", `Image of ${content.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", `250`);
        portrait.setAttribute("height", `350`);

        card.appendChild(fullName);
        card.appendChild(portrait);
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
