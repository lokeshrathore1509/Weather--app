import React from 'react';

/**
 * WeatherIcon Component
 * Renders crisp, responsive, animated SVG icons tailored to different weather conditions.
 *
 * @param {string} type - Weather icon identifier (e.g., 'clear-day', 'rain', 'thunderstorm')
 * @param {number} size - Desired width/height in pixels
 */
export default function WeatherIcon({ type, size = 110 }) {
  const iconSize = size;

  switch (type) {
    case 'clear-day':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg sun-pulse"
          aria-label="Sunny Clear Sky"
        >
          <defs>
            <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="60%" stopColor="#FFB300" />
              <stop offset="100%" stopColor="#FB8C00" />
            </radialGradient>
            <filter id="sunGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Animated Ray Ring */}
          <g className="sun-rays" stroke="url(#sunGrad)" strokeWidth="3.5" strokeLinecap="round">
            <line x1="50" y1="12" x2="50" y2="4" />
            <line x1="50" y1="88" x2="50" y2="96" />
            <line x1="12" y1="50" x2="4" y2="50" />
            <line x1="88" y1="50" x2="96" y2="50" />
            <line x1="23" y1="23" x2="17" y2="17" />
            <line x1="77" y1="77" x2="83" y2="83" />
            <line x1="23" y1="77" x2="17" y2="83" />
            <line x1="77" y1="23" x2="83" y2="17" />
          </g>
          {/* Main Sun Body */}
          <circle cx="50" cy="50" r="24" fill="url(#sunGrad)" filter="url(#sunGlow)" />
        </svg>
      );

    case 'clear-night':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg moon-float"
          aria-label="Clear Night"
        >
          <defs>
            <linearGradient id="moonGrad" x1="20%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="50%" stopColor="#B3E5FC" />
              <stop offset="100%" stopColor="#81D4FA" />
            </linearGradient>
            <filter id="moonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Crescent Moon */}
          <path
            d="M62 20C40 22 25 39 25 61C25 76 34 88 47 92C32 90 20 77 20 61C20 42 35 26 54 25C57 25 60 25.5 62 20Z"
            fill="url(#moonGrad)"
            filter="url(#moonGlow)"
          />
          {/* Twinkling Stars */}
          <circle cx="72" cy="30" r="2.5" fill="#FFF59D" className="star-twinkle" />
          <circle cx="84" cy="52" r="1.8" fill="#FFF9C4" className="star-twinkle-delay" />
          <circle cx="68" cy="74" r="2" fill="#E1F5FE" className="star-twinkle" />
        </svg>
      );

    case 'partly-cloudy-day':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg cloud-float"
          aria-label="Partly Cloudy Day"
        >
          <defs>
            <radialGradient id="sunBehind" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="100%" stopColor="#FB8C00" />
            </radialGradient>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#CFD8DC" />
            </linearGradient>
            <filter id="cloudShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.2" />
            </filter>
          </defs>
          {/* Sun peek */}
          <circle cx="64" cy="34" r="19" fill="url(#sunBehind)" className="sun-pulse" />
          {/* Front Cloud */}
          <path
            d="M30 75C21.7 75 15 68.3 15 60C15 52.4 20.6 46.1 28 45.1C30.3 36.5 38.2 30 47.5 30C58.3 30 67.2 38.3 68 49C75.2 49.5 81 55.6 81 63C81 71.3 74.3 78 66 78H30Z"
            fill="url(#cloudGrad)"
            filter="url(#cloudShadow)"
          />
        </svg>
      );

    case 'partly-cloudy-night':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg cloud-float"
          aria-label="Partly Cloudy Night"
        >
          <defs>
            <linearGradient id="moonBehind" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="100%" stopColor="#90CAF9" />
            </linearGradient>
            <linearGradient id="nightCloud" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECEFF1" />
              <stop offset="100%" stopColor="#90A4AE" />
            </linearGradient>
          </defs>
          {/* Moon peek */}
          <path
            d="M62 22C47 24 37 36 37 51C37 55 38 58.7 39.8 62C34.2 60 30 54.8 30 48.6C30 38.3 38.3 30 48.6 30C53.4 30 57.7 31.8 61 34.8C61.4 30.3 62 26 62 22Z"
            fill="url(#moonBehind)"
          />
          {/* Front Cloud */}
          <path
            d="M30 74C22.3 74 16 67.7 16 60C16 52.8 21.4 46.8 28.5 46.1C31 38 38.6 32 47.5 32C58 32 66.6 40.1 67.4 50.4C74.4 51 80 56.9 80 64C80 71.7 73.7 78 66 78H30Z"
            fill="url(#nightCloud)"
          />
        </svg>
      );

    case 'overcast':
    case 'cloudy':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg cloud-float"
          aria-label="Overcast Clouds"
        >
          <defs>
            <linearGradient id="cloudBackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B0BEC5" />
              <stop offset="100%" stopColor="#78909C" />
            </linearGradient>
            <linearGradient id="cloudFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECEFF1" />
              <stop offset="100%" stopColor="#B0BEC5" />
            </linearGradient>
          </defs>
          {/* Back Cloud */}
          <path
            d="M36 54C30 54 25 49 25 43C25 37.5 29 33 34.5 32.2C36.5 26 42.2 21.5 49 21.5C57 21.5 63.6 27.5 64.2 35.3C69.6 35.7 74 40.2 74 45.6C74 51.5 69.2 56.3 63.3 56.3H36Z"
            fill="url(#cloudBackGrad)"
            opacity="0.8"
          />
          {/* Front Cloud */}
          <path
            d="M26 78C18.8 78 13 72.2 13 65C13 58.2 18.2 52.6 25 51.9C27.2 44.3 34.2 38.6 42.6 38.6C52.4 38.6 60.5 46.1 61.3 55.7C67.8 56.3 73 61.8 73 68.4C73 75.6 67.2 81.4 60 81.4H26Z"
            fill="url(#cloudFrontGrad)"
          />
        </svg>
      );

    case 'fog':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg"
          aria-label="Foggy Mist"
        >
          <defs>
            <linearGradient id="fogCloud" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECEFF1" />
              <stop offset="100%" stopColor="#B0BEC5" />
            </linearGradient>
          </defs>
          <path
            d="M28 50C22 50 17 45 17 39C17 33.3 21.3 28.6 27 28C28.8 21.6 34.7 17 41.7 17C49.9 17 56.7 23.3 57.3 31.3C62.8 31.8 67 36.4 67 42C67 48 62.1 52.8 56 52.8H28Z"
            fill="url(#fogCloud)"
          />
          <g stroke="#ECEFF1" strokeWidth="4" strokeLinecap="round" opacity="0.85">
            <line x1="20" y1="62" x2="80" y2="62" className="fog-line-1" />
            <line x1="26" y1="72" x2="74" y2="72" className="fog-line-2" />
            <line x1="16" y1="82" x2="68" y2="82" className="fog-line-1" />
          </g>
        </svg>
      );

    case 'drizzle':
    case 'rain-light':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg cloud-float"
          aria-label="Light Rain Drizzle"
        >
          <defs>
            <linearGradient id="drizzleCloud" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECEFF1" />
              <stop offset="100%" stopColor="#90A4AE" />
            </linearGradient>
          </defs>
          <path
            d="M26 58C19 58 13.5 52.5 13.5 45.5C13.5 39 18.5 33.6 25 33C27.1 25.8 33.8 20.5 41.8 20.5C51.1 20.5 58.8 27.6 59.6 36.7C65.8 37.3 70.7 42.5 70.7 48.8C70.7 55.7 65.2 61.2 58.3 61.2H26Z"
            fill="url(#drizzleCloud)"
          />
          <g stroke="#4FC3F7" strokeWidth="3" strokeLinecap="round" className="rain-drops">
            <line x1="30" y1="68" x2="26" y2="80" />
            <line x1="46" y1="68" x2="42" y2="80" />
            <line x1="62" y1="68" x2="58" y2="80" />
          </g>
        </svg>
      );

    case 'rain':
    case 'rain-heavy':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg cloud-float"
          aria-label="Heavy Rain"
        >
          <defs>
            <linearGradient id="heavyRainCloud" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CFD8DC" />
              <stop offset="100%" stopColor="#546E7A" />
            </linearGradient>
          </defs>
          <path
            d="M26 56C19 56 13.5 50.5 13.5 43.5C13.5 37 18.5 31.6 25 31C27.1 23.8 33.8 18.5 41.8 18.5C51.1 18.5 58.8 25.6 59.6 34.7C65.8 35.3 70.7 40.5 70.7 46.8C70.7 53.7 65.2 59.2 58.3 59.2H26Z"
            fill="url(#heavyRainCloud)"
          />
          <g stroke="#29B6F6" strokeWidth="3.5" strokeLinecap="round" className="heavy-rain-anim">
            <line x1="28" y1="64" x2="22" y2="80" className="drop-1" />
            <line x1="42" y1="66" x2="36" y2="82" className="drop-2" />
            <line x1="56" y1="64" x2="50" y2="80" className="drop-3" />
            <line x1="70" y1="66" x2="64" y2="82" className="drop-1" />
          </g>
        </svg>
      );

    case 'thunderstorm':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg cloud-float"
          aria-label="Thunderstorm"
        >
          <defs>
            <linearGradient id="stormCloud" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#78909C" />
              <stop offset="100%" stopColor="#37474F" />
            </linearGradient>
            <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEE58" />
              <stop offset="100%" stopColor="#FF9100" />
            </linearGradient>
            <filter id="boltGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M26 52C19 52 13.5 46.5 13.5 39.5C13.5 33 18.5 27.6 25 27C27.1 19.8 33.8 14.5 41.8 14.5C51.1 14.5 58.8 21.6 59.6 30.7C65.8 31.3 70.7 36.5 70.7 42.8C70.7 49.7 65.2 55.2 58.3 55.2H26Z"
            fill="url(#stormCloud)"
          />
          {/* Lightning Bolt */}
          <polygon
            points="50,48 37,67 47,67 41,88 61,62 50,62"
            fill="url(#boltGrad)"
            filter="url(#boltGlow)"
            className="lightning-flash"
          />
        </svg>
      );

    case 'snow':
    case 'freezing-rain':
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg cloud-float"
          aria-label="Snow Fall"
        >
          <defs>
            <linearGradient id="snowCloud" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECEFF1" />
              <stop offset="100%" stopColor="#B0BEC5" />
            </linearGradient>
          </defs>
          <path
            d="M26 56C19 56 13.5 50.5 13.5 43.5C13.5 37 18.5 31.6 25 31C27.1 23.8 33.8 18.5 41.8 18.5C51.1 18.5 58.8 25.6 59.6 34.7C65.8 35.3 70.7 40.5 70.7 46.8C70.7 53.7 65.2 59.2 58.3 59.2H26Z"
            fill="url(#snowCloud)"
          />
          {/* Falling Snowflakes */}
          <g fill="#E0F7FA" className="snow-flakes">
            <circle cx="28" cy="72" r="3.2" className="flake-1" />
            <circle cx="48" cy="78" r="4" className="flake-2" />
            <circle cx="66" cy="71" r="3.2" className="flake-3" />
            <circle cx="38" cy="88" r="2.8" className="flake-1" />
            <circle cx="58" cy="90" r="3" className="flake-2" />
          </g>
        </svg>
      );

    default:
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="weather-svg cloud-float"
          aria-label="Cloudy Weather"
        >
          <path
            d="M30 75C21.7 75 15 68.3 15 60C15 52.4 20.6 46.1 28 45.1C30.3 36.5 38.2 30 47.5 30C58.3 30 67.2 38.3 68 49C75.2 49.5 81 55.6 81 63C81 71.3 74.3 78 66 78H30Z"
            fill="#CFD8DC"
          />
        </svg>
      );
  }
}
