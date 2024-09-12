const apiKey = "7be3b7dff72667aa459388ffb0954bc6"

const cityEnteredEL = document.getElementById("cityEntered")
const getWeatherEL = document.getElementById("getWeather")
const weatherData = document.getElementById("weather-data")
const formEL = document.querySelector("form")
const descriptionEL = document.querySelector(".description")
formEL.addEventListener("submit" , (event)=>{
  event.preventDefault()
  const cityInput =  cityEnteredEL.value
 getWeatgherData(cityInput)
 
})
async function  getWeatgherData(cityInput) {
    try {
        const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
   if (!response.ok) {
    throw new Error("Network response wass not ok");
   }
   const data = await response.json()
   console.log(data);
  const temperature = Math.round(data.main.temp)
  const description = data.weather[0].description
  const icon = data.weather[0].icon
  const details = [
    `feels like :${Math.round(data.main.feels_like)}c°`,
     `humidity : ${data.main.humidity}%`,
    `wind speed : ${data.wind.speed}km/h`,
]
 weatherData.querySelector(".icon").innerHTML = `
 <img src="http://openweathermap.org/img/wn/${icon}.png" alt="">`
weatherData.querySelector(".temprature").textContent= ` ${temperature} c°`
weatherData.querySelector(".description").textContent = description

weatherData.querySelector(".details").innerHTML = details.map((detail)=>`
<div>${detail}</div>`).join("")
} catch (error) {}
}