import React from 'react';

/**
 * WeatherDetails Component
 * Displays additional weather statistics such as Humidity, Wind Speed,
 * and Feels Like temperature in clean, visually distinct metric cards.
 *
 * @param {number} humidity - Relative humidity percentage
 * @param {number} windSpeed - Wind speed in km/h
 * @param {number} apparentTemperature - Feels like temperature in °C
 * @param {string} timezone - Local timezone of the location
 */
export default function WeatherDetails({
  humidity,
  windSpeed,
  apparentTemperature,
  timezone
}) {
  return (
    <div className="weather-details-container" aria-label="Detailed Weather Metrics">
      {/* Metric 1: Humidity */}
      <div className="detail-card">
        <div className="detail-icon-wrap humidity-icon-wrap">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
        <div className="detail-info">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity ?? '--'}%</span>
          <span className="detail-sub">
            {humidity > 70 ? 'High moisture' : humidity < 30 ? 'Dry air' : 'Comfortable'}
          </span>
        </div>
      </div>

      {/* Metric 2: Wind Speed */}
      <div className="detail-card">
        <div className="detail-icon-wrap wind-icon-wrap">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
          </svg>
        </div>
        <div className="detail-info">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{windSpeed != null ? `${windSpeed} km/h` : '--'}</span>
          <span className="detail-sub">
            {windSpeed > 25 ? 'Strong breeze' : windSpeed > 10 ? 'Gentle breeze' : 'Light calm'}
          </span>
        </div>
      </div>

      {/* Metric 3: Feels Like Temperature */}
      <div className="detail-card">
        <div className="detail-icon-wrap temp-icon-wrap">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
          </svg>
        </div>
        <div className="detail-info">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">
            {apparentTemperature != null ? `${Math.round(apparentTemperature)}°C` : '--'}
          </span>
          <span className="detail-sub">Apparent index</span>
        </div>
      </div>

      {/* Metric 4: Timezone / Local Region */}
      {timezone && (
        <div className="detail-card">
          <div className="detail-icon-wrap zone-icon-wrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="detail-info">
            <span className="detail-label">Timezone</span>
            <span className="detail-value zone-text">
              {timezone.replace('_', ' ')}
            </span>
            <span className="detail-sub">Local time region</span>
          </div>
        </div>
      )}
    </div>
  );
}
