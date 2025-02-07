export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=9a277d113eb3410fa2dd4ba9463edce7`
        )
        const data = await response.json()
        if (data.results && data.results.length > 0) {
          resolve({
            latitude,
            longitude,
            city: data.results[0].components.city || data.results[0].components.town,
            timezone: data.results[0].annotations.timezone.name
          })
        } else {
          reject(new Error('Could not determine city location'))
        }
      },
      (error) => {
        reject(error)
      }
    )
  })
}

export const getCityCoordinates = async (cityName: string) => {
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityName)}&countrycode=us&key=9a277d113eb3410fa2dd4ba9463edce7`
  )
  const data = await response.json()
  if (data.results && data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry
    const timezone = data.results[0].annotations.timezone.name
    return { latitude: lat, longitude: lng, timezone }
  }
  throw new Error('City not found')
}

export const fetchWeather = async (latitude: number, longitude: number, timezone: string) => {
  const queryParams = `latitude=${latitude}`
    + `&longitude=${longitude}`
    + `&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset`
    + `&hourly=temperature_2m,weather_code`
    + `&current=temperature_2m,apparent_temperature,weather_code`
    + `&timezone=${timezone}`
    + `&temperature_unit=fahrenheit`
    + `&forecast_days=10`
    + `&forecast_hours=24`
  const weatherResult = await fetch(
    `https://api.open-meteo.com/v1/forecast?${queryParams}`
  )
  const weatherJson = await weatherResult.json()

  addSunriseSunset(weatherJson)

  console.log('🚀 ~ fetchWeather ~ weatherJson:', weatherJson)

  return { weatherJson }
}

const addSunriseSunset = (weatherJson: any) => {
  const sunrise = weatherJson.daily.sunrise[0]
  const sunset = weatherJson.daily.sunset[0]

  // Insert sunrise and sunset into hourly timeline
  const hourlyTimes = [ ...weatherJson.hourly.time ]
  const hourlyTemps = [ ...weatherJson.hourly.temperature_2m ]
  const hourlyWeatherCodes = [ ...weatherJson.hourly.weather_code ]
  const currentTime = new Date()
  const sunriseTime = new Date(sunrise)
  const sunsetTime = new Date(sunset)

  // Only add sunrise if it hasn't happened yet
  if (currentTime < sunriseTime) {
    const sunriseIndex = hourlyTimes.findIndex(time => new Date(time).getTime() >= sunriseTime.getTime())
    if (sunriseIndex !== -1) {
      hourlyTimes.splice(sunriseIndex, 0, sunrise)
      hourlyTemps.splice(sunriseIndex, 0, 'Sunrise')
      hourlyWeatherCodes.splice(sunriseIndex, 0, 100)
    }
  }

  // Only add sunset if it hasn't happened yet
  if (currentTime < sunsetTime) {
    const sunsetIndex = hourlyTimes.findIndex(time => new Date(time).getTime() >= sunsetTime.getTime())
    if (sunsetIndex !== -1 && sunsetIndex + 1 < hourlyTimes.length) {
      hourlyTimes.splice(sunsetIndex + 1, 0, sunset)
      hourlyTemps.splice(sunsetIndex + 1, 0, 'Sunset')
      hourlyWeatherCodes.splice(sunsetIndex + 1, 0, 101)
    }
  }

  // Replace clear sky codes with clear night after sunset and before sunrise
  for (let i = 0; i < hourlyWeatherCodes.length; i++) {
    const time = new Date(hourlyTimes[i])
    if ((time > sunsetTime || time < sunriseTime) &&
      (hourlyWeatherCodes[i] === 0 || hourlyWeatherCodes[i] === 1)) {
      hourlyWeatherCodes[i] = 102
    }
  }

  weatherJson.hourly.time = hourlyTimes
  weatherJson.hourly.temperature_2m = hourlyTemps
  weatherJson.hourly.weather_code = hourlyWeatherCodes
}
