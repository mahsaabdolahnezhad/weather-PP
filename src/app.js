let apiKey = "3980a7c8f2a782241a093131b099f993";
let cityName = "New York";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey}&units=metric";

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

function displayTemp(response) {
let tempratureElement = document.querySelector("#temprature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");
tempratureElement.innerHTML =Math.round(response.data.main.temp);
cityElement.innerHTML =response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt*1000);
iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);


  };
  
  axios.get(apiUrl).then(displayTemp);