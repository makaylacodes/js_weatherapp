


const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data 
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;

//API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

//Check if browser supports geolocation
if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML ="<p>Browser Doesn't Support Geolocation</p>";
}

// set users position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// show error when there is an issue with geolocation service
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message}</p>`;
}
