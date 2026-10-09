/**
 * Utility functions for Open-Meteo Weather Data
 * Maps WMO weather interpretation codes to conditions, descriptions, and icon identifiers.
 */

export const getWeatherCondition = (code, isDay = 1) => {
  const codeNum = Number(code);

  switch (codeNum) {
    case 0:
      return {
        condition: isDay ? 'Clear Sky' : 'Clear Night',
        icon: isDay ? 'clear-day' : 'clear-night',
        description: isDay ? 'Warm and sunny skies' : 'Clear starry night',
        theme: isDay ? 'theme-sunny' : 'theme-night'
      };
    case 1:
      return {
        condition: isDay ? 'Mainly Sunny' : 'Mainly Clear',
        icon: isDay ? 'partly-cloudy-day' : 'partly-cloudy-night',
        description: 'Mostly clear with faint scattered clouds',
        theme: isDay ? 'theme-sunny' : 'theme-night'
      };
    case 2:
      return {
        condition: 'Partly Cloudy',
        icon: isDay ? 'partly-cloudy-day' : 'partly-cloudy-night',
        description: 'Scattered clouds with intermittent sunshine',
        theme: 'theme-cloudy'
      };
    case 3:
      return {
        condition: 'Overcast',
        icon: 'overcast',
        description: 'Dense cloud coverage throughout the sky',
        theme: 'theme-cloudy'
      };
    case 45:
    case 48:
      return {
        condition: 'Foggy',
        icon: 'fog',
        description: 'Mist and reduced atmospheric visibility',
        theme: 'theme-fog'
      };
    case 51:
    case 53:
    case 55:
      return {
        condition: 'Drizzle',
        icon: 'drizzle',
        description: 'Light, steady moisture and gentle drizzle',
        theme: 'theme-rain'
      };
    case 56:
    case 57:
      return {
        condition: 'Freezing Drizzle',
        icon: 'freezing-rain',
        description: 'Chilly freezing drizzle on surfaces',
        theme: 'theme-snow'
      };
    case 61:
      return {
        condition: 'Light Rain',
        icon: 'rain-light',
        description: 'Occasional light rain showers',
        theme: 'theme-rain'
      };
    case 63:
      return {
        condition: 'Moderate Rain',
        icon: 'rain',
        description: 'Continuous steady rainfall',
        theme: 'theme-rain'
      };
    case 65:
      return {
        condition: 'Heavy Rain',
        icon: 'rain-heavy',
        description: 'Heavy precipitation and downpours',
        theme: 'theme-rain'
      };
    case 66:
    case 67:
      return {
        condition: 'Freezing Rain',
        icon: 'freezing-rain',
        description: 'Sub-freezing icy rainfall',
        theme: 'theme-snow'
      };
    case 71:
    case 73:
    case 75:
    case 77:
      return {
        condition: 'Snow Fall',
        icon: 'snow',
        description: 'Cold snowfall and accumulating flakes',
        theme: 'theme-snow'
      };
    case 80:
    case 81:
    case 82:
      return {
        condition: 'Rain Showers',
        icon: 'rain-heavy',
        description: 'Passing intense precipitation bursts',
        theme: 'theme-rain'
      };
    case 85:
    case 86:
      return {
        condition: 'Snow Showers',
        icon: 'snow',
        description: 'Frequent passing snow flurries',
        theme: 'theme-snow'
      };
    case 95:
      return {
        condition: 'Thunderstorm',
        icon: 'thunderstorm',
        description: 'Thunder, lightning strikes and rain',
        theme: 'theme-thunder'
      };
    case 96:
    case 99:
      return {
        condition: 'Severe Storm',
        icon: 'thunderstorm',
        description: 'Severe thunderstorm with hail',
        theme: 'theme-thunder'
      };
    default:
      return {
        condition: 'Cloudy',
        icon: 'overcast',
        description: 'Variable cloudiness',
        theme: 'theme-cloudy'
      };
  }
};

/**
 * Formats a date string or timestamp into a friendly human-readable format.
 */
export const formatWeatherDate = (timeString) => {
  try {
    const date = timeString ? new Date(timeString) : new Date();
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  } catch {
    return new Date().toLocaleDateString();
  }
};
