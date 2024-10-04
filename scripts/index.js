const dateObj = new Date();
console.log(dateObj)

let currentYear = document.querySelector("#currentyear");
currentYear.textContent = dateObj.getFullYear();

const hamburger = document.querySelector("#mode");
const navLinks = document.querySelector(".navigation");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("hide");
    navLinks.classList.toggle("open");
  });


let lastModif = new Date(document.lastModified);
const modified = document.querySelector("#lastModified");
modified.innerHTML = lastModif;

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// const all = courses.filter((course) => {
//     return course.subject;
//   });
  const cse = courses.filter((course) => {
    return course.subject.split("")[0] === "C";
  });
  const wdd = courses.filter((course) => {
    return course.subject.split("")[0] === "W";
  });


const navUl = document.querySelector(".web-certificate");
const upper = document.querySelector(".upper");
const links = upper.querySelectorAll("a");
// const h2 = document.querySelector("h2");

for (let index = 0; index < links.length; index++) {
  links[index].addEventListener("click", () => {
    // h2.innerText = links[index].innerText;

    if (links[index].innerText === "ALL") {
      createCard(courses);
    } else if (links[index].innerText === "CSE") {
      createCard(cse);
    } else if (links[index].innerText === "WDD") {
      createCard(wdd);
    } 
  });
}

const createCard = (cardArray) => {
    document.querySelector(".lower").innerHTML = "";
    cardArray.forEach((course) => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      
    //   let location = document.createElement("p");
    //   let dedicationDate = document.createElement("p");
    //   let area = document.createElement("p");
    //   let img = document.createElement("img");
    
  
      name.innerText = `${course.subject} ${course.number}`;
    //   location.innerHTML = ` <span class="tag">Location: </span>${temple.location}`;
    //   dedicationDate.innerHTML = `<span class="tag">Dedicated on:</span>  ${temple.dedicated}`;
    //   area.innerHTML = `<span class="tag">Area in sq ft:</span> ${temple.area}`;
    //   img.setAttribute("src", `${temple.imageUrl}`);
    //   img.setAttribute("alt", `${temple.templeName}`);
    //   img.setAttribute("loading", "lazy");
    //   img.setAttribute("width", "800");
    //   img.setAttribute("height", "500");
  
      card.appendChild(name);
    
  
      card.setAttribute("class", "card");
  
      document.querySelector(".lower").appendChild(card);
    });
  };
  
  createCard(courses);