let cityData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    weather: "windy",
    humidity: 24,
    windSpeed: 7,
  },
  shiraz: {
    city: "Shiraz",
    temp: 34,
    weather: "sunny",
    humidity: 12,
    windSpeed: 2,
  },
  mashhad: {
    city: "Mashhad",
    temp: -1,
    weather: "cloudy",
    humidity: 21,
    windSpeed: 1,
  },
  rasht: {
    city: "Rasht",
    temp: 5,
    weather: "cloudy",
    humidity: 78,
    windSpeed: 9,
  },
  tabriz: {
    city: "Tabriz",
    temp: 14,
    weather: "windy",
    humidity: 18,
    windSpeed: 5,
  },
};

let searchBar = document.querySelector(".search-bar");
let searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function () {
  let searchBarValue = searchBar.value;
  let mainCityData = cityData[searchBarValue];

  console.log(mainCityData);

  if (mainCityData) {
    document.querySelector(".city").innerHTML =
      "Weather in" + " " + mainCityData.city;
    document.querySelector(".temp").innerHTML = mainCityData.temp + "°C";
    document.querySelector(".description").innerHTML = mainCityData.weather;
    document.querySelector(".humidity").innerHTML =
      "Humidity :" + " " + mainCityData.humidity + "%";
    document.querySelector(".wind").innerHTML =
      "Wind Speed :" + " " + mainCityData.windSpeed + " " + "Km/h";
    document.querySelector(".weather").classList.remove("loading");
  }
});
