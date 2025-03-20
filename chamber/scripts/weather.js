document.addEventListener("DOMContentLoaded", async () => {
    const API_KEY = "bcf181fcd085afb916bfae827fc922a0"; 
    const CITY = "Esmeraldas,EC"; 
    const UNITS = "metric"; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`;

    async function fetchWeather() {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            const data = await response.json();
            console.log("Weather Data:", data);  

            document.getElementById("temperature").textContent = Math.round(data.main.temp) + "°C";
            document.getElementById("condition").textContent = data.weather[0].description;
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById("weather-icon").alt = data.weather[0].description;

        } catch (error) {
            console.error("Error fetching weather data:", error);
            document.getElementById("temperature").textContent = "--°C";
            document.getElementById("condition").textContent = "Unavailable";
        }
    }

    await fetchWeather();
});
