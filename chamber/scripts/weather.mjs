// select HTML elements in the document
// const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=4.85&lon=6.98&appid=4d4a0b19d23373e66431d7167db6a8aa&units=imperial";

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

const displayResults = (data) => {
  //   currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconlink = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let weatherDescription = data.weather[0].description;
  weatherIcon.setAttribute("src", iconlink);
  weatherIcon.setAttribute("alt", weatherDescription);
  captionDesc.textContent = `${weatherDescription}`;
};

apiFetch();
