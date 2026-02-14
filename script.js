const API_KEY = 'f79da0161f9f41b1b5f193217262101'; 
const API_URL = 'https://api.weatherapi.com/v1/current.json';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const searchCard = document.getElementById('searchCard');
const resultCard = document.getElementById('resultCard');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name');
    }
});
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            getWeatherData(city);
        }
    }
});
locationBtn.addEventListener('click', () => {
    getDeviceLocation();
});
function getDeviceLocation() {
    if (navigator.geolocation) {
        locationBtn.textContent = 'Getting Location...';
        locationBtn.disabled = true;
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                getWeatherData(`${lat},${lon}`);
            },
            (error) => {
                alert('Unable to get your location. Please enter city name manually.');
                locationBtn.textContent = 'Get Device Location';
                locationBtn.disabled = false;
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}
async function getWeatherData(query) {
    try {
        const response = await fetch(
            `${API_URL}?key=${API_KEY}&q=${query}&aqi=no`
        );
        
        if (!response.ok) {
            throw new Error('Location not found');
        }
        
        const data = await response.json();
        displayWeatherData(data);
        
    } catch (error) {
        alert(error.message);
        locationBtn.textContent = 'Get Device Location';
        locationBtn.disabled = false;
    }
}
function displayWeatherData(data) {
    document.getElementById('temp').textContent = `${Math.round(data.current.temp_c)}°C`;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('cityName').textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById('weatherIcon').src = `https:${data.current.condition.icon}`;
    document.getElementById('feelsLike').textContent = `${Math.round(data.current.feelslike_c)}°C`;
    document.getElementById('humidity').textContent = `${data.current.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.current.wind_kph} km/h`;
    document.getElementById('pressure').textContent = `${data.current.pressure_mb} mb`;
    document.getElementById('visibility').textContent = `${data.current.vis_km} km`;
    document.getElementById('cloudCover').textContent = `${data.current.cloud}%`;

    searchCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
    locationBtn.textContent = 'Get Device Location';
    locationBtn.disabled = false;
}
document.getElementById('refreshBtn').addEventListener('click', () => {
    const cityName = document.getElementById('cityName').textContent.split(',')[0];
    getWeatherData(cityName);
});
document.querySelectorAll('.back-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        searchCard.classList.remove('hidden');
        resultCard.classList.add('hidden');
        cityInput.value = '';
    });
});
