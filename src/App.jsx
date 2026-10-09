import React, { useState,useEffect} from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

/**
 * Main App Component
 * Manages state for weather data, loading status, and error messages.
 * Uses Open-Meteo Geocoding and Forecast APIs.
 */
export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeCity, setActiveCity] = useState('Delhi');

  /**
   * Fetches weather data using Open-Meteo APIs
   * 1. Geocoding API -> converts city name to latitude & longitude
   * 2. Forecast API -> retrieves current temperature, humidity, wind speed, condition
   */
  const fetchWeather = async (cityName) => {
    // 1. Validation: check for empty input
    if (!cityName || !cityName.trim()) {
      setErrorMessage('Please enter a city name to search.');
      return;
    }

    const trimmedCity = cityName.trim();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // 2. Fetch latitude and longitude from Open-Meteo Geocoding API
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        trimmedCity
      )}&count=1&language=en&format=json`;

      const geoResponse = await fetch(geoUrl);
      if (!geoResponse.ok) {
        throw new Error('Network error while looking up city location.');
      }

      const geoData = await geoResponse.json();

      // Check if city was found
      if (!geoData.results || geoData.results.length === 0) {
        setErrorMessage(
          `City "${trimmedCity}" not found. Please verify the spelling and try again.`
        );
        setIsLoading(false);
        return;
      }

      const location = geoData.results[0];
      const {
        name: resolvedCity,
        country: resolvedCountry,
        admin1: adminArea,
        latitude,
        longitude
      } = location;

      // 3. Fetch current weather from Open-Meteo Forecast API
      const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=auto`;

      const forecastResponse = await fetch(forecastUrl);
      if (!forecastResponse.ok) {
        throw new Error('Network error while retrieving weather forecast.');
      }

      const forecastData = await forecastResponse.json();

      if (!forecastData.current) {
        throw new Error('Weather data is currently unavailable for this location.');
      }

      const current = forecastData.current;

      // 4. Format and update weather state
      setWeatherData({
        city: resolvedCity,
        country: resolvedCountry || '',
        adminArea: adminArea || '',
        latitude,
        longitude,
        temperature: current.temperature_2m,
        humidity: current.relative_humidity_2m,
        windSpeed: current.wind_speed_10m,
        apparentTemperature: current.apparent_temperature,
        weatherCode: current.weather_code,
        isDay: current.is_day,
        time: current.time,
        timezone: forecastData.timezone || ''
      });

      setActiveCity(resolvedCity);
    } catch (err) {
      console.error('Error fetching weather:', err);
      setErrorMessage(
        err.message || 'Failed to fetch weather data. Please check your internet connection.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Requirement: Add a default city (Delhi) when the application first loads
  useEffect(() => {
    fetchWeather('Delhi');
  }, []);

  // Handle retry / refresh
  const handleRefresh = () => {
    if (activeCity) {
      fetchWeather(activeCity);
    } else {
      fetchWeather('Delhi');
    }
  };

  return (
    <div className="app-layout">
      {/* Ambient background glowing orbs */}
      <div className="ambient-background" aria-hidden="true">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      <main className="app-container">
        {/* App Header */}
        <header className="app-header">
          <div className="brand-logo">
            <span className="brand-icon" role="img" aria-label="Sun and cloud">
              🌤️
            </span>
            <div className="brand-titles">
              <h1 className="brand-title">SkyPulse</h1>
              <p className="brand-tagline">Real-time Global Weather Forecast</p>
            </div>
          </div>

          {/* Quick Refresh Button */}
          {weatherData && (
            <button
              type="button"
              className="refresh-btn"
              onClick={handleRefresh}
              disabled={isLoading}
              title="Refresh current city weather"
              aria-label="Refresh weather data"
            >
              <svg
                className={`refresh-icon ${isLoading ? 'spinning' : ''}`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              <span className="refresh-label">Refresh</span>
            </button>
          )}
        </header>

        {/* Search Bar Component */}
        <SearchBar onSearch={fetchWeather} isLoading={isLoading} />

        {/* Error Notification Alert */}
        {errorMessage && (
          <div className="error-alert" role="alert" aria-live="assertive">
            <div className="error-icon-box">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div className="error-content">
              <strong className="error-heading">Search Error</strong>
              <p className="error-text">{errorMessage}</p>
            </div>
            <button
              type="button"
              className="error-dismiss-btn"
              onClick={() => setErrorMessage('')}
              aria-label="Dismiss error notification"
            >
              ✕
            </button>
          </div>
        )}

        {/* Loading State Skeleton / Spinner */}
        {isLoading && (
          <div className="loading-card" aria-live="polite">
            <div className="loading-spinner"></div>
            <p className="loading-text">Fetching live weather data...</p>
            <span className="loading-subtext">Connecting to Open-Meteo Satellite Feed</span>
          </div>
        )}

        {/* Weather Card Display */}
        {!isLoading && weatherData && (
          <WeatherCard data={weatherData} />
        )}

        {/* Footer */}
        <footer className="app-footer">
          <p>
            Powered by{' '}
            <a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Open-Meteo API
            </a>{' '}
            • Free & Open Source Weather
          </p>
        </footer>
      </main>
    </div>
  );
}
