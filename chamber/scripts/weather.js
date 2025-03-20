document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    const city = "Esmeraldas";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const weatherResponse = await fetch(weatherUrl);
        const forecastResponse = await fetch(forecastUrl);

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error("Weather data not available");
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        document.getElementById("temperature").textContent = weatherData.main.temp;
        document.getElementById("condition").textContent = weatherData.weather[0].description;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

        const forecastContainer = document.getElementById("forecast");
        forecastContainer.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            const forecastItem = document.createElement("li");
            forecastItem.textContent = `Day ${i + 1}: ${forecastData.list[i * 8].main.temp}°C - ${forecastData.list[i * 8].weather[0].description}`;
            forecastContainer.appendChild(forecastItem);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
});
