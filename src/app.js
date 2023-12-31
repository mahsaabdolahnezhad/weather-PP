function formatDate(timestamp){
let date = new Date(timestamp);
let hours= date.getHours();
let minutes = date.getMinutes();
if (minutes <10){
minutes =`0${minutes}`; 
}
if (hours <10){
  hours = `0${hours}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day =days[date.getDay()];
return `${day}  ${hours}:${minutes}`;

  }
  function search(city){
let apiKey = "3980a7c8f2a782241a093131b099f993";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(displayTemp);
  };

  function getForecast(city){
apiKey = "6a0e728f9903t4d8c372boc76730411b";
apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

axios(apiUrl).then(displayForecast);
  };

  function formatDay(timestamp){
    let date = new Date(timestamp * 1000);
    let days= ["Sun" , "Mon", "Tue" , "Wed" , "Thu", "Fri", "Sat"];
   
  return days[date.getDay()];

  }

function displayTemp(response) {
let tempratureElement = document.querySelector("#temprature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");


celcuisTemp = response.data.main.temp;
tempratureElement.innerHTML =Math.round(response.data.main.temp);
cityElement.innerHTML =response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt*1000);
iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
  };

  function handleSubmit(event){
event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
search(cityInputElement.value);

  };
  
  function displayFahrenheit(event){
  event.preventDefault();
 let fahrenheitTemp = (celcuisTemp * 9) / 5 + 32;
 
 let celcuisTemprature = document.querySelector("#temprature");
 celcuisTemprature.innerHTML = Math.round(fahrenheitTemp);
 celsiusLink.classList.remove("active");
 fahrenheitLink.classList.add("active");
  };
  
function displayCelsius(event){
event.preventDefault();
 let celcuisTemprature = document.querySelector("#temprature");
 celcuisTemprature.innerHTML =Math.round(celcuisTemp);
 celsiusLink.classList.add("active");
 fahrenheitLink.classList.remove("active");
};

  let celcuisTemp = null; 

  let form = document.querySelector("#search-form");
  form.addEventListener("submit",handleSubmit);


let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click",displayFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsius);

function displayForecast(response) {

  let forecastHtml = "";

  response.data.daily.forEach(function (day , index) {
    if (index < 6){
    forecastHtml += `
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">${formatDay(day.time)}</div>
          <img src="${day.condition.icon_url}" alt="" class="forecast-icon">
          <div class="weather-forecast-temp">
            <span class="weather-max-temp">${Math.round(
              day.temperature.maximum
            )}°</span>
            <span class="weather-min-temp">${Math.round(
              day.temperature.minimum
            )}°</span>
          </div>
      </div>`;
            }
  });

  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
};
search("tokyo");
getForecast("tokyo");