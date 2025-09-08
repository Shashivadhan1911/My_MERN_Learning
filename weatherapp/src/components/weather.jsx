
//cffbdf0a4b30953a0cc1beb1ea7bef5a

//https://home.openweathermap.org/api_keys

import React, { useState } from 'react';
import './weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API='cffbdf0a4b30953a0cc1beb1ea7bef5a';

    const getWeather = async () => {
        if(!city.trim()){
            setError('Please enter a city name');
            setWeather(null);
            return;
        }
        setLoading(true);
        setError('');
        setWeather(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
            if(!response.ok){
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    }

    const getWeatherIcon = (condition) => {
        const iconMap = {
            'clear sky': '☀️',
            'few clouds': '⛅',
            'scattered clouds': '☁️',
            'broken clouds': '☁️',
            'shower rain': '🌦️',
            'rain': '🌧️',
            'thunderstorm': '⛈️',
            'snow': '❄️',
            'mist': '🌫️',
            'overcast clouds': '☁️'
        };
        return iconMap[condition] || '🌤️';
    };

    const getBackgroundClass = (condition) => {
        if (condition.includes('clear')) return 'sunny-bg';
        if (condition.includes('few clouds')) return 'cloudy-bg';
        if (condition.includes('scattered clouds')) return 'cloudy-bg';
        if (condition.includes('broken clouds')) return 'cloudy-bg';
        if (condition.includes('overcast clouds')) return 'cloudy-bg';
        if (condition.includes('shower rain')) return 'rainy-bg';
        if (condition.includes('rain')) return 'rainy-bg';
        if (condition.includes('thunderstorm')) return 'stormy-bg';
        if (condition.includes('snow')) return 'snowy-bg';
        if (condition.includes('mist')) return 'cloudy-bg';
        return 'default-bg';
    };

    return (
      <>
        <div className={`weather-container ${weather ? getBackgroundClass(weather.weather[0].description.toLowerCase()) : 'default-bg'}`}>
          <div className="weather-header">
            <h1>🌤️ Weather App</h1>
            <div className="search-section">
                <input
                    type="text"
                    value={city}
                    placeholder='Enter city name'
                    onChange={(e) => setCity(e.target.value)}
                    className="weather-input"
                />
                <button onClick={getWeather} className="weather-button">
                    🔍 Get Weather
                </button>
            </div>
          </div>

            {loading && (
                <div className="weather-loading">
                    <div className="loading-spinner">⏳</div>
                    <h2>Loading weather data...</h2>
                </div>
            )}

            {error && (
                <div className="weather-error">
                    <div className="error-icon">⚠️</div>
                    <h2>{error}</h2>
                </div>
            )}

            {weather && (
                <div className="weather-result">
                    <div className="weather-main">
                        <div className="weather-icon">
                            {getWeatherIcon(weather.weather[0].description.toLowerCase())}
                        </div>
                        <div className="weather-info">
                            <h2>{weather.name}, {weather.sys.country}</h2>
                            <div className="temperature">
                                <span className="temp-value">{Math.round(weather.main.temp)}</span>
                                <span className="temp-unit">°C</span>
                            </div>
                            <p className="condition">{weather.weather[0].description}</p>
                        </div>
                    </div>

                    <div className="weather-details">
                        <div className="detail-item">
                            <div className="detail-icon">🌡️</div>
                            <div className="detail-info">
                                <span className="detail-label">Feels like</span>
                                <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">💧</div>
                            <div className="detail-info">
                                <span className="detail-label">Humidity</span>
                                <span className="detail-value">{weather.main.humidity}%</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">💨</div>
                            <div className="detail-info">
                                <span className="detail-label">Wind Speed</span>
                                <span className="detail-value">{weather.wind.speed} m/s</span>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">📊</div>
                            <div className="detail-info">
                                <span className="detail-label">Pressure</span>
                                <span className="detail-value">{weather.main.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </>
    );
}

export default Weather;
