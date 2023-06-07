// 1 function per fetch request pass responses between 
var userForm = document.querySelector('#user-form');
var cityInput = document.querySelector('#city');
var previousSearches = document.querySelector('#previous-searches');
var weatherLocation = document.querySelector('#weather-location');
var currentWeatherEl = document.querySelector('current-weather-container');
var fiveDayForecastEl = document.querySelector('#five-day-forecast-container');

var getGeocode = function (cityName) {
    var geocodeUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=e6aa9334d4eabc66f4fb68aff872a208';

    fetch(geocodeUrl)
    .then(function (response) {

    })
}

var getForecast = function (lat, lon) {
    var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=e6aa9334d4eabc66f4fb68aff872a208&units=imperial';

    fetch(forecastUrl)
    .then(function (response) {
        
    })
}