// Declaring the variables
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".weather");
let hi_low = document.querySelector(".hi-low");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
const kelvin = 273;
// API ID
const api = "6d055e39ee237af35ca066f35474e9df";
let cityvalue = "Bengaluru";
// API URL
let currentdate;
let cityname;
var searchbox = document.getElementById("searchbox");
searchbox.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        getweather(false);
    }
});

function getweather(check) {
    if (check)
    {
        cityname = cityvalue;
    }
    else
    {
        cityname = document.getElementsByClassName("search-box")[0].value;
    }
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    currentdate=today.toDateString();
    console.log(cityname);
    const base = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6d055e39ee237af35ca066f35474e9df`;
    // Calling the API
    fetch(base)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log(data.name + ", " + data.sys.country);
            city.textContent = data.name + ", " + data.sys.country;
            date.textContent=currentdate;
            temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
            summary.textContent = data.weather[0].description;
            hi_low.textContent = Math.floor(data.main.temp_min - kelvin) + "°C" + "/" + Math.floor(data.main.temp_max - kelvin) + "°C"
        });
}
window.addEventListener("load", () => {
    getweather(true);




});


