import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';
import { getWeatherCondition, formatWeatherDate } from '../utils/weatherUtils';

/**
 * WeatherCard Component
 * Displays the main weather information including City, Country,
 * Temperature in °C, Condition, Weather Icon, and Detailed Metrics.
 *
 * @param {Object} data - Processed weather data object
 */
export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    city,
    country,
    adminArea,
    temperature,
    humidity,
    windSpeed,
    apparentTemperature,
    weatherCode,
    isDay,
    time,
    timezone
  } = data;

  const weatherInfo = getWeatherCondition(weatherCode, isDay);
  const formattedDate = formatWeatherDate(time);

  return (
    <article className={`weather-card ${weatherInfo.theme}`} aria-label={`Weather forecast for ${city}`}>
      {/* Card Header: City, Country, Date */}
      <header className="card-header">
        <div className="location-badge">
          <svg
            className="pin-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div className="location-text">
            <h2 className="city-title">
              {city}
              {country ? <span className="country-tag">, {country}</span> : null}
            </h2>
            {adminArea && adminArea !== city && (
              <span className="admin-area">{adminArea}</span>
            )}
          </div>
        </div>

        <div className="date-badge">
          <span className="date-text">{formattedDate}</span>
          <span className="day-night-indicator">
            {isDay ? '☀️ Day' : '🌙 Night'}
          </span>
        </div>
      </header>

      {/* Hero Weather Section: Temperature & Icon */}
      <div className="card-hero">
        <div className="hero-temp-block">
          <div className="temp-wrapper">
            <span className="temp-number">{Math.round(temperature)}</span>
            <span className="temp-unit">°C</span>
          </div>

          <div className="condition-block">
            <div className="condition-pill">{weatherInfo.condition}</div>
            <p className="condition-desc">{weatherInfo.description}</p>
          </div>
        </div>

        <div className="hero-icon-block">
          <WeatherIcon type={weatherInfo.icon} size={130} />
        </div>
      </div>

      {/* Divider */}
      <div className="card-divider" aria-hidden="true"></div>

      {/* Reusable WeatherDetails component */}
      <WeatherDetails
        humidity={humidity}
        windSpeed={windSpeed}
        apparentTemperature={apparentTemperature}
        timezone={timezone}
      />
    </article>
  );
}
