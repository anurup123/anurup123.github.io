(function() {
  // Default fallback to Cambridge, UK coordinates
  let lat = 52.2053;
  let lon = 0.1218;
  let locationName = "Cambridge, UK";
  
  // Try to get user's location using geolocation API
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        
        // Reverse geocode to get location name
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
          .then(response => response.json())
          .then(data => {
            const city = data.address.city || data.address.town || data.address.village || data.address.county;
            const country = data.address.country;
            locationName = city ? `${city}, ${country}` : country;
            document.getElementById('location-name').textContent = locationName;
          })
          .catch(err => {
            console.error('Reverse geocoding error:', err);
            document.getElementById('location-name').textContent = `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
          });
        
        // Fetch weather with detected location
        fetchWeather(lat, lon);
      },
      function(error) {
        console.log('Geolocation error, using default location:', error.message);
        document.getElementById('location-name').textContent = locationName;
        // Use default Cambridge location
        fetchWeather(lat, lon);
      }
    );
  } else {
    console.log('Geolocation not supported, using default location');
    document.getElementById('location-name').textContent = locationName;
    fetchWeather(lat, lon);
  }
  
  function fetchWeather(latitude, longitude) {
    // Fetch current weather and forecast using Open-Meteo (powered by ECMWF IFS model)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&models=best_match`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Weather API request failed');
        }
        return response.json();
      })
      .then(data => {
        const current = data.current;
        const hourly = data.hourly;
        const daily = data.daily;
        
        // Display current weather
        const weatherText = getWeatherDescription(current.weather_code);
        const currentHTML = `
          <div class="weather-info">
            <div class="temp-display">
              <span class="temperature">${Math.round(current.temperature_2m)}°C</span>
              <span class="weather-desc">${weatherText}</span>
            </div>
            <div class="weather-details">
              <div class="detail">💧 Humidity: ${current.relative_humidity_2m}%</div>
              <div class="detail">💨 Wind: ${Math.round(current.wind_speed_10m)} km/h</div>
            </div>
          </div>
        `;
        document.getElementById('weather-data').innerHTML = currentHTML;
        document.getElementById('weather-data').classList.remove('weather-loading');
        
        // Display 6-hour forecast (next 6 hours)
        const now = new Date();
        const forecastHTML = '<div class="forecast-hours">' + 
          Array.from({length: 6}, (_, i) => {
            const forecastTime = new Date(now.getTime() + (i + 1) * 60 * 60 * 1000);
            const hour = forecastTime.getHours().toString().padStart(2, '0');
            const tempIndex = Math.floor((forecastTime - new Date(data.hourly.time[0])) / (60 * 60 * 1000));
            const temp = hourly.temperature_2m[tempIndex];
            const code = hourly.weather_code[tempIndex];
            const desc = getWeatherDescription(code);
            return `<div class="forecast-hour">
              <div class="forecast-time">${hour}:00</div>
              <div class="forecast-icon">${getWeatherIcon(code)}</div>
              <div class="forecast-temp">${Math.round(temp)}°C</div>
            </div>`;
          }).join('') + 
        '</div>';
        document.getElementById('forecast-data').innerHTML = forecastHTML;
        document.getElementById('forecast-data').classList.remove('forecast-loading');
        
        // Display 3-day forecast
        const forecast3dayHTML = '<div class="forecast-days">' +
          Array.from({length: 3}, (_, i) => {
            const forecastDate = new Date(daily.time[i]);
            const dayName = forecastDate.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'});
            const maxTemp = daily.temperature_2m_max[i];
            const minTemp = daily.temperature_2m_min[i];
            const code = daily.weather_code[i];
            const desc = getWeatherDescription(code);
            return `<div class="forecast-day">
              <div class="day-name">${dayName}</div>
              <div class="day-icon">${getWeatherIcon(code)}</div>
              <div class="day-desc">${desc}</div>
              <div class="day-temps">
                <span class="max-temp">${Math.round(maxTemp)}°</span>
                <span class="min-temp">${Math.round(minTemp)}°</span>
              </div>
            </div>`;
          }).join('') +
        '</div>';
        document.getElementById('forecast-3day').innerHTML = forecast3dayHTML;
        document.getElementById('forecast-3day').classList.remove('forecast-3day-loading');
      })
      .catch(error => {
        console.error('Weather fetch error:', error);
        document.getElementById('weather-data').innerHTML = '<p>Unable to load weather data</p>';
        document.getElementById('forecast-data').innerHTML = '<p>Unable to load forecast data</p>';
        document.getElementById('forecast-3day').innerHTML = '<p>Unable to load 3-day forecast</p>';
      });
  }
  
  function getWeatherDescription(code) {
    const descriptions = {
      0: 'Clear',
      1: 'Mostly Clear',
      2: 'Partly Cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Foggy',
      51: 'Light Drizzle',
      53: 'Drizzle',
      55: 'Heavy Drizzle',
      61: 'Light Rain',
      63: 'Rain',
      65: 'Heavy Rain',
      71: 'Light Snow',
      73: 'Snow',
      75: 'Heavy Snow',
      80: 'Light Showers',
      81: 'Showers',
      82: 'Heavy Showers',
      85: 'Snow Showers',
      86: 'Heavy Snow Showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with Hail',
      99: 'Thunderstorm with Hail'
    };
    return descriptions[code] || 'Unknown';
  }
  
  function getWeatherIcon(code) {
    if (code === 0) return '☀️';
    if (code <= 3) return '⛅';
    if (code === 45 || code === 48) return '🌫️';
    if (code >= 51 && code <= 67) return '🌧️';
    if (code >= 71 && code <= 77) return '❄️';
    if (code >= 80 && code <= 82) return '🌧️'; // Rain showers
    if (code >= 85 && code <= 86) return '❄️'; // Snow showers
    if (code >= 95) return '⛈️';
    return '🌤️';
  }
})();
