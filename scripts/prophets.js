const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
// const cards = document.querySelector("#cards");

async function getProphetData(address) {
  try {
    const response = await fetch(address);
    const data = await response.json();
    console.log(data.prophets);
    console.log(Array.isArray(data.prophets))
    displayProphets(data.prophets)
  } catch (error) {
    console.log(error);
  }
}


function displayProphets(prop) {
    prop.forEach((prophet) => {
        const card = document.createElement('section')
        const fullName = document.createElement('h2')
        const dateOfBirth = document.createElement('p')
        const placeOfBirth = document.createElement('p')
        const portrait = document.createElement('img')



        fullName.textContent = `${prophet.name} ${prophet.lastname} `; // fill in the blank
        // Build the image portrait by setting all the relevant attributes

        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.append(fullName, dateOfBirth, placeOfBirth, portrait); //fill in the blank
        // card.appendChild(fullName); //fill in the blank
        // card.appendChild(portrait);

        cards.appendChild(card);


    }) 

}
console.log(getProphetData(url))
