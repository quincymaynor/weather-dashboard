// SET UP
// get weather API key and endpoints functioning (use insomnia)
// use their geocoding API
// the geocoder API will be able to get the parameters needed for the weather API

// 1 function per fetch request pass responses between 


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