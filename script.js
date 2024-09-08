document.getElementById('search-btn').addEventListener('click', fetchWeather);

`<<<<<<<<<<<<<<  ✨ Codeium Command ⭐  >>>>>>>>>>>>>>>>
<<<<<<<  98ba546d-f035-4e04-9846-5d297bc7e194  >>>>>>>`
async function fetchWeather() {
    const location = document.getElementById('location').value;
    const apiKey = '210d0a8d3d5e28e5c98b01d8b7a01e61'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        // Update UI with the fetched data
        document.getElementById('location-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${Math.round(data?.main?.temp - 273.15)}°C`;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById('wind-speed').textContent = `${data.wind.speed}`;
        document.getElementById('humidity').textContent = `${data.main.humidity}`;
        document.getElementById('feel').textContent = `${Math.round(data?.main?.feels_like - 273.15)}°C`;
        document.getElementById('rise').textContent = `${new Date (data?.sys?.sunrise).toLocaleTimeString()}`;
        document.getElementById('set').textContent = `${new Date (data?.sys?.sunset).toLocaleTimeString()}`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}