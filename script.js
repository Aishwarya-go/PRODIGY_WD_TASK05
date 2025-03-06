const apiKey = 'YOUR_API KEY'; 

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city');
        return;
    }

    const url = `YOUR_API_URL`; #replace your_actual_url

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('City not found');
                return;
            }

            const weatherInfo = document.getElementById('weather-info');
            const temperature = data.main.temp;
            const weatherCondition = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            weatherInfo.innerHTML = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Condition:</strong> ${weatherCondition}</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data.');
        });
}
