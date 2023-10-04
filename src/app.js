let apiKey = "3980a7c8f2a782241a093131b099f993";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={apiKey}&units=metric";


  function displayTemp(response) {
let tempratureElement = document.querySelector("#temprature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
tempratureElement.innerHTML =Math.round(response.data.main.temp);
cityElement.innerHTML =response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML = response.data.wind.speed;



  };
  
  axios.get(apiUrl).then(displayTemp);