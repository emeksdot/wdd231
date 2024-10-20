

gridbutton.addEventListener("click", () => {
    // contentPane = "";
  const members = fetchContent();
  members.forEach((element) => {
    let imageAddress = `${element.imageURL}`;
    

    image.setAttribute("src", imageAddress);
    address.innerHTML = `${element.address}`;
    phone.innerHTML = `${element.phone}`;
    webURL.innerHTML = `${element.webURL}`;
    
  });

});

fetchContent()
