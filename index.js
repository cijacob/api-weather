let weatherHtml = document.querySelector('.weatherDiv');

let xhr = new XMLHttpRequest();
let url = "http://api.openweathermap.org/data/2.5/weather?q=Bruxelles&units=metric&lang=fr&appid=e659567ba408cf065f01e88254cfdd61";
let weather = description="";

xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  var jsObj = JSON.parse(this.responseText);
    tempCelsius = jsObj.main.temp;
    humidity = jsObj.main.humidity;
    clouds = jsObj.weather[0].description
    return showWeather()
  }
};

xhr.open("GET", url, true);
xhr.send(); 

function showWeather(){
  return weatherHtml.innerHTML = "il fait actuellement  " + tempCelsius + "°C et le ciel est " + clouds
}