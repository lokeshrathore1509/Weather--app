import React, { useState } from 'react';

/**
 * SearchBar Component
 * Allows users to search for weather by city name.
 * Handles input change, form submission, and empty validation.
 *
 * @param {Function} onSearch - Callback function invoked with the searched city name
 * @param {boolean} isLoading - Indicates if weather fetch is currently in progress
 */
export default function SearchBar({ onSearch, isLoading }) {
  const [cityInput, setCityInput] = useState('');

  // Popular quick-select cities for quick testing and user convenience
  const quickCities = ['Delhi', 'London', 'Tokyo', 'New York', 'Sydney'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(cityInput);
  };

  const handleQuickCityClick = (city) => {
    setCityInput(city);
    onSearch(city);
  };

  const handleClear = () => {
    setCityInput('');
  };

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit} className="search-form" role="search">
        <div className="search-input-wrapper">
          {/* Search Magnifying Glass Icon */}
          <svg
            className="search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            id="city-search-input"
            type="text"
            className="search-input"
            placeholder="Search city (e.g., Delhi, Tokyo, Paris)..."
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            disabled={isLoading}
            autoComplete="off"
            aria-label="City name search input"
          />

          {/* Clear button when input has text */}
          {cityInput && !isLoading && (
            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
              aria-label="Clear city input"
            >
              ✕
            </button>
          )}
        </div>

        <button
          id="city-search-button"
          type="submit"
          className="search-button"
          disabled={isLoading}
          aria-label="Search weather for entered city"
        >
          {isLoading ? (
            <span className="btn-loading-content">
              <span className="btn-spinner" aria-hidden="true"></span>
              <span>Searching...</span>
            </span>
          ) : (
            <span className="btn-text">
              <span>Search</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          )}
        </button>
      </form>

      {/* Quick city suggestions */}
      <div className="quick-cities" aria-label="Popular cities">
        <span className="quick-label">Trending:</span>
        <div className="quick-pills">
          {quickCities.map((city) => (
            <button
              key={city}
              type="button"
              className="quick-city-chip"
              onClick={() => handleQuickCityClick(city)}
              disabled={isLoading}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
