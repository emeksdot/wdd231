const hamburger = document.querySelector(".ham-icon");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  ul.classList.toggle("hide");
  //   ul.classList.toggle("open");
});

let lastModif = new Date(document.lastModified);
const modified = document.querySelector("#lastModified");
modified.innerHTML = lastModif;
const date = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayOfWeek = daysOfWeek[date.getDay()];
const tomorrow = daysOfWeek[date.getDay() + 1];
const nextTomorrow = daysOfWeek[date.getDay() + 2];

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const current = document.querySelector(".current");
const forecast = document.querySelector(".forecast");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=4.801160&lon=6.992490&appid=5773d3f93d5b13cdc1099b31d543917b&units=imperial";

const urlForecast =
  "https://api.openweathermap.org/data/2.5/forecast?lat=4.801160&lon=6.992490&cnt=3&appid=5773d3f93d5b13cdc1099b31d543917b&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function apiForecast() {
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
      const data2 = await response.json();
      console.log(data2);
      displayForecast(data2);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

const displayResults = (data) => {
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const imgCont = document.createElement("div");
  imgCont.setAttribute("class", "img-container");
  const textCont = document.createElement("div");
  textCont.setAttribute("class", "text-content");

  const ic = document.createElement("img");
  ic.setAttribute("src", iconsrc);
  ic.setAttribute("alt", "Weather icon");
  const temp = document.createElement("h3");
  const description = document.createElement("p");
  const maxTemp = document.createElement("p");
  const minTemp = document.createElement("p");
  const humidity = document.createElement("p");
  const sunrise = document.createElement("p");
  const sunset = document.createElement("p");

  temp.innerHTML = `${data.main.temp}&deg;F`;
  description.innerText = `${
    data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1)
  }`;
  maxTemp.innerText = `High: ${data.main.temp_max} `;
  minTemp.innerText = `Low: ${data.main.temp_min}`;
  humidity.innerText = `Humidity: ${data.main.humidity}%`;
  sunrise.innerText = `Sunrise: ${
    new Date(data.sys.sunrise).getHours() + 5
  }:${new Date(data.sys.sunrise).getMinutes()}am`;
  sunset.innerText = `Sunset: ${
    new Date(data.sys.sunset).getHours() + 5
  }:${new Date(data.sys.sunset).getMinutes()}pm`;
  imgCont.appendChild(ic);
  textCont.append(
    temp,
    description,
    maxTemp,
    minTemp,
    humidity,
    sunrise,
    sunset
  );
  current.appendChild(imgCont);
  current.appendChild(textCont);
};

const displayForecast = (data) => {
  const foreCastContainer = document.createElement("div");
  foreCastContainer.setAttribute("class", "forecastContainer")
  const firstDay = document.createElement("div");
  const secondDay = document.createElement("div");
  const thirdDay = document.createElement("div");

  firstDay.innerHTML = `<h3><span class="normalText">Today</span>:  ${data.list[0].main.temp}&deg;F</h3>`;
  secondDay.innerHTML = `<h3><span class="normalText">${tomorrow}</span>:  ${data.list[1].main.temp}&deg;F</h3>`;
  thirdDay.innerHTML = `<h3><span class="normalText">${nextTomorrow}</span>:  ${data.list[2].main.temp}&deg;F</h3>`;

  foreCastContainer.append(firstDay, secondDay, thirdDay);
  forecast.appendChild(foreCastContainer);
};




function double() {
    Promise.all([apiFetch(), apiForecast()])
      .then(data => {
         const response1 = data[0];
         displayResults(data[0])
         const response2 = data[1];
         displayForecast(data[1])
      })
  }
double();


