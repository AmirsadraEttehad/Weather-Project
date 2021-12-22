// there are some obj for cites's data
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



// select input for its value
let searchBar = document.querySelector(".search-bar");

// select btn for click and search weather
let searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function () {

    // input value
  let searchBarValue = searchBar.value;

    // select value that you search
  let mainCityData = cityData[searchBarValue];

    // it's structure for show the weather
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
