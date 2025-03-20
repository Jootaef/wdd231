document.addEventListener("DOMContentLoaded", async () => {
    const temperatureSpan = document.getElementById("temperature");
    const conditionSpan = document.getElementById("condition");
    const weatherIcon = document.getElementById("weather-icon");
    const forecastContainer = document.getElementById("forecast");

    const API_KEY = "bcf181fcd085afb916bfae827fc922a0"; 
    const CITY = "Esmeraldas";
    const COUNTRY = "EC";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&units=metric&appid=${API_KEY}`;

    async function fetchWeather() {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error("Failed to fetch weather data.");
            }
            const data = await response.json();


            const temperature = Math.round(data.main.temp);
            const condition = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;


            temperatureSpan.textContent = temperature;
            conditionSpan.textContent = condition;
            weatherIcon.src = iconUrl;
            weatherIcon.alt = condition;

            await fetchForecast();
        } catch (error) {
            console.error("Error fetching weather data:", error);
            temperatureSpan.textContent = "--";
            conditionSpan.textContent = "Unavailable";
        }
    }

    await fetchWeather();
});
