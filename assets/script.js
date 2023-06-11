var userForm = document.querySelector('#user-form');
var cityInput = document.querySelector('#city');
var citySubmit = document.querySelector('#submit');
var previousSearches = document.querySelector('#previous-searches');
var weatherLocation = document.querySelector('#weather-location');
var currentWeatherEl = document.querySelector('#current-weather-container');
var fiveDayForecastEl = document.querySelector('#five-day-forecast-container');

//formsubmit function
var formSubmit = function(event) {
  event.preventDefault();

  var cityName = cityInput.value.trim();

  getGeocode(cityName);
//   if (cityName) {
//     getGeocode(cityName);
//   } else {
//     // don't use an alert, but alert('Please enter a city');
//   }
};

//buttonclick function
var buttonClick = function(event) {
  var previousCity = event.target//something about getting the value from local storage

  if (previousCity) {
    getGeocode(previousCity);
  }
};

var getGeocode = function(cityName) {
    var geocodeUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=e6aa9334d4eabc66f4fb68aff872a208';

    fetch(geocodeUrl)
    .then(function (response) {
        if (response.ok) {
            response.json()
            .then(function (data) {
              getWeather(data[0].lat, data[0].lon);  
              getForecast(data[0].lat, data[0].lon);
            });
          } else {
            alert('Error: ' + response.statusText);
          } 
    })
    .catch(function (error) {
        // something about alterting the user their input wasn't found;
    }); 

var getWeather = function(lat, lon) {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=e6aa9334d4eabc66f4fb68aff872a208&units=imperial';

    fetch(weatherUrl)
    .then(function (response) {
        if (response.ok) {
            response.json()
            .then(function (data) {
              displayWeather(data);
            });
          } else {
            alert('Error: ' + response.statusText);
          }
        })
    .catch(function (error) {
      // alert user that weather data can't be found;
    })
}}

var getForecast = function(lat, lon) {
    var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=e6aa9334d4eabc66f4fb68aff872a208&units=imperial';

    fetch(forecastUrl)
    .then(function (response) {
        if (response.ok) {
            response.json()
            .then(function (data) {
              displayForecast(data);
            });
          } else {
            alert('Error: ' + response.statusText);
          }
        })
    .catch(function (error) {
      // alert user that weather data can't be found;
    })
}

var displayWeather = function(data) {
    console.log("this is the weather", data)

    var cityName = document.createElement('h1');
    cityName.textContent = data.city.name;
    currentWeatherEl.append(cityName);
    
    var currentTime = document.createElement('h3');
    currentTime.textContent = data.list[0].dt_txt;
    currentWeatherEl.append(currentTime);
    
    var iconValue = data.list[0].weather[0].icon;
    var icon = "http://openweathermap.org/img/wn/" + iconValue + ".png"
    var weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', icon);
    weatherIcon.classList.add('icon-size');
    currentWeatherEl.append(weatherIcon);

    var currentTemp = document.createElement('p');
    currentTemp.textContent = "The current temperature is: " + data.list[0].main.temp;
    currentWeatherEl.append(currentTemp);

    var currentHumid = document.createElement('p');
    currentHumid.textContent = "The current humidity is: " + data.list[0].main.humidity;
    currentWeatherEl.append(currentHumid);

    var currentWind = document.createElement('p');
    currentWind.textContent = "The current windspeed is: " + data.list[0].wind.speed;
    currentWeatherEl.append(currentWind);
}

// var displayForecast = function(data) {
//     console.log("this is the forecast", data)

//     //   currentWeatherEl.textContent = 'No search results found.';
//     //   return;
//     // } else {
//     for (var i = 0; i < data.list.length; i+8) {
//         var dayCard = document.createElement('div');
//         dayCard.classList.add('card')
//         fiveDayForecastEl.append(dayCard)

//         // var cityName = document.createElement('h1');
//         // cityName.textContent = data.city.name;
//         // dayCard.append(cityName);
            
//         var currentTime = document.createElement('h3');
//         currentTime.textContent = data.list[0].dt_txt;
//         dayCard.append(currentTime);
            
//         var iconValue = data.list[0].weather[0].icon;
//         var icon = "http://openweathermap.org/img/wn/" + iconValue + ".png"
//         var weatherIcon = document.createElement('img');
//         weatherIcon.setAttribute('src', icon);
//         weatherIcon.classList.add('icon-size');
//         dayCard.append(weatherIcon);
        
//         var currentTemp = document.createElement('p');
//         currentTemp.textContent = "The current temperature is: " + data.list[0].main.temp;
//         dayCard.append(currentTemp);
        
//         var currentHumid = document.createElement('p');
//         currentHumid.textContent = "The current humidity is: " + data.list[0].main.humidity;
//         dayCard.append(currentHumid);
        
//         var currentWind = document.createElement('p');
//         currentWind.textContent = "The current windspeed is: " + data.list[0].wind.speed;
//         dayCard.append(currentWind);

//         }
//     // } 
// };

citySubmit.addEventListener('click', formSubmit);

//generate cards
//setattribute to add text content
//for loop for generating 5day
//define variables for traversing the data in the display function