// select HTML elements in the document
// const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const details = document.querySelector('.details');

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

  const temp = document.createElement('h4');
  temp.innerHTML = `${data.main.temp}&deg;F`;
  const desc = document.createElement('p');
  desc.innerHTML = `${data.weather[0].description}`;
  const high = document.createElement('p');
  high.innerHTML = `High: ${data.main.temp_max}&deg;F`;
  const low = document.createElement('p');
  low.innerHTML = `Low: ${data.main.temp_min}&deg;F`;
  const humidity = document.createElement('p');
  humidity.innerHTML = `Humidity: ${data.main.humidity}`;
  const sunrise = document.createElement('p');
  sunrise.innerHTML = `Humidity: ${data.sys.sunrise}`;
  const sunset = document.createElement('p');
  sunset.innerHTML = `Humidity: ${data.sys.sunset}`;
  details.append(temp, desc, high, low, humidity, sunrise, sunset);
};

apiFetch();
