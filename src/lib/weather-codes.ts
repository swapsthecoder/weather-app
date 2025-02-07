export const weatherCodes = {
  0: {
    description: 'Clear sky',
    severity: 0
  },
  1: {
    description: 'Mainly clear',
    severity: 0
  },
  2: {
    description: 'Partly cloudy',
    severity: 1
  },
  3: {
    description: 'Overcast',
    severity: 1
  },
  45: {
    description: 'Foggy',
    severity: 2
  },
  48: {
    description: 'Depositing rime fog',
    severity: 2
  },
  51: {
    description: 'Light drizzle',
    severity: 2
  },
  53: {
    description: 'Moderate drizzle',
    severity: 2
  },
  55: {
    description: 'Dense drizzle',
    severity: 3
  },
  56: {
    description: 'Light freezing drizzle',
    severity: 3
  },
  57: {
    description: 'Dense freezing drizzle',
    severity: 3
  },
  61: {
    description: 'Slight rain',
    severity: 2
  },
  63: {
    description: 'Moderate rain',
    severity: 3
  },
  65: {
    description: 'Heavy rain',
    severity: 4
  },
  66: {
    description: 'Light freezing rain',
    severity: 3
  },
  67: {
    description: 'Heavy freezing rain',
    severity: 4
  },
  71: {
    description: 'Slight snow fall',
    severity: 3
  },
  73: {
    description: 'Moderate snow fall',
    severity: 4
  },
  75: {
    description: 'Heavy snow fall',
    severity: 5
  },
  77: {
    description: 'Snow grains',
    severity: 3
  },
  80: {
    description: 'Slight rain showers',
    severity: 2
  },
  81: {
    description: 'Moderate rain showers',
    severity: 3
  },
  82: {
    description: 'Violent rain showers',
    severity: 4
  },
  85: {
    description: 'Slight snow showers',
    severity: 3
  },
  86: {
    description: 'Heavy snow showers',
    severity: 4
  },
  95: {
    description: 'Thunderstorm',
    severity: 4
  },
  96: {
    description: 'Thunderstorm with slight hail',
    severity: 4
  },
  99: {
    description: 'Thunderstorm with heavy hail',
    severity: 5
  },
  100: {
    description: 'Sunrise',
    severity: 0
  },
  101: {
    description: 'Sunset',
    severity: 0
  }
} as const

export type WeatherCode = keyof typeof weatherCodes
