/* Ancienne façon d'appel API
let xhr = new XMLHttpRequest();
let url = "http://api.openweathermap.org/data/2.5/weather?q=Bruxelles&units=metric&lang=fr&appid=e659567ba408cf065f01e88254cfdd61";

xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  var jsObj = JSON.parse(this.responseText);
    city = jsObj.name
    tempCelsius = jsObj.main.temp;
    humidity = jsObj.main.humidity;
    clouds = jsObj.weather[0].description
    return showWeather()
  }
};
xhr.open("GET", url, true);
xhr.send(); */


async function weatherDiv(){

  let city = document.getElementById('city').textContent;
  
  const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=bruxelles&units=metric&lang=fr&appid=e659567ba408cf065f01e88254cfdd61')
    .then(response => response.json())
    .then(json => json)
    
  showWeather(weather)
}

function showWeather(data){
  const name = data.name 
  const tempCel = data.main.temp
  const description = data.weather[0].description
  const clouds = data.weather[0].main

  document.getElementById('city').textContent = name
  document.querySelector('.temp').textContent = Math.round(tempCel);
  document.querySelector('.description').textContent = description;

  document.querySelector('i.wi').className = weatherIcon[clouds]
  console.log(weatherIcon[clouds])

  document.body.className = clouds.toLowerCase()
}

const weatherIcon = {
  "Clear" : "wi wi-day-sunny", 
  "Rain" : "wi wi-day-rain", 
  "Clouds" : "wi wi-day-cloudy"
}


/*const city = document.getElementById('city')

city.addEventListener("click", () => {
  city.contentEditable = true;
})

city.addEventListener("keydown", (e) => {
  if(e.keyCode === 13){
    e.preventDefault()
    city.contentEditable = true;
    weatherDiv()
  }
})*/


weatherDiv()