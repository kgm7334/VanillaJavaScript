const API_KEY="a1237e1a13caea07d0d9ff873f5d8e34";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");
const weather_img = document.querySelector(".weather-img")

function getWeather(lat , lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        const description = json.weather[0].description;
        weather.innerText =`${place} ${temperature} ℃`
        var imgURL = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
        weather_img.src = imgURL;
        //$('#weather-img').attr("src", imgURL);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant Acces Geo Location");
}

function askForCodrds(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCodrds();
    }
    else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
}


init();