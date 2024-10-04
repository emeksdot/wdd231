const dateObj = new Date();
console.log(dateObj);

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
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

const all = courses.filter((course) => {
  return course.subject;
});
const cse = courses.filter((course) => {
  return course.subject.split("")[0] === "C";
});
const wdd = courses.filter((course) => {
  return course.subject.split("")[0] === "W";
});

//   let sum;

//   const sum = courses.reduce(
//     (accumulator, course) => accumulator + course.credits,
//     0,
//   );

const navUl = document.querySelector(".web-certificate");
const upper = document.querySelector(".upper");
const links = upper.querySelectorAll("a");
const creditsSpan = document.getElementsByClassName("credits");

let sum = 12;
creditsSpan[0].innerHTML = sum;

console.log(creditsSpan);
for (let index = 0; index < links.length; index++) {
  links[index].addEventListener("click", () => {
    // h2.innerText = links[index].innerText;

    if (links[index].innerText === "ALL") {
      createCard(courses);
      sum = all.reduce(
        (accumulator, course) => accumulator + course.credits,
        0
      );
      creditsSpan[0].innerHTML = sum;
    } else if (links[index].innerText === "CSE") {
      createCard(cse);
      sum = cse.reduce(
        (accumulator, course) => accumulator + course.credits,
        0
      );
      creditsSpan[0].innerHTML = sum;
    } else if (links[index].innerText === "WDD") {
      createCard(wdd);
      sum = cse.reduce(
        (accumulator, course) => accumulator + course.credits,
        0
      );
      creditsSpan[0].innerHTML = sum;
    }
  });
}

const createCard = (cardArray) => {
  document.querySelector(".lower").innerHTML = "";
  cardArray.forEach((course) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");

    name.innerText = `${course.subject} ${course.number}`;
    card.setAttribute("class", `btn`);

    if (course.completed === true) {
      card.setAttribute("class", "completed");
    }

    card.appendChild(name);

    document.querySelector(".lower").appendChild(card);
  });
};

createCard(courses);
