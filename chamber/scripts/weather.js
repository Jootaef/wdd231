document.addEventListener("DOMContentLoaded", async () => {
    const temperatureSpan = document.getElementById("temperature");
    const conditionSpan = document.getElementById("condition");
    const weatherIcon = document.getElementById("weather-icon");
    const forecastContainer = document.getElementById("forecast");

    const API_KEY = "43c4053a8ecc7f940709a78d97a2eded"; 
    const CITY = "Esmeraldas";
    const COUNTRY = "EC";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&units=metric&appid=${API_KEY}`;

    async function fetchWeather() {
        try {
            const response = await fetch(URL);
            console.log(" This is the variable response:", response);
            if (!response.ok) {
                throw new Error("Failed to fetch weather data.");
            }
            const data = await response.json();
            console.log(" This is the variable data:", data);

            // Extract temperature and weather conditions
            const temperature = Math.round(data.main.temp);
            const condition = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

            // Update the page with the weather information
            temperatureSpan.textContent = temperature;
            conditionSpan.textContent = condition;
            weatherIcon.src = iconUrl;
            weatherIcon.alt = condition;

            // Fetch the 3-day weather forecast
            await fetchForecast();
        } catch (error) {
            console.error("Error fetching weather data:", error);

            // If an error occurs, display the local image instead
            weatherIcon.src = "images/weather.jpg";
            weatherIcon.alt = "Weather image";
            temperatureSpan.textContent = "--";
            conditionSpan.textContent = "Unavailable";
        }
    }

    async function fetchForecast() {
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY},${COUNTRY}&units=metric&appid=${API_KEY}`;

        try {
            const response = await fetch(forecastURL);
            if (!response.ok) {
                throw new Error("Failed to fetch weather forecast.");
            }
            const data = await response.json();

            // Clear previous content
            forecastContainer.innerHTML = "";

            // Extract data every 8 hours (~3-day forecast)
            for (let i = 0; i < data.list.length; i += 8) {
                const forecast = data.list[i];
                const date = new Date(forecast.dt_txt).toLocaleDateString();
                const temp = Math.round(forecast.main.temp);
                const iconCode = forecast.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

                // Create the forecast item
                const forecastItem = document.createElement("li");
                forecastItem.innerHTML = `
                    <img src="${iconUrl}" alt="Weather icon">
                    <p>${date}</p>
                    <p>${temp}°C</p>
                `;
                forecastContainer.appendChild(forecastItem);
            }
        } catch (error) {
            console.error("Error fetching forecast:", error);
            forecastContainer.innerHTML = "<p>Forecast unavailable.</p>";
        }
    }

    await fetchWeather();
});
