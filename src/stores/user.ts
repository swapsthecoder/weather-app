import { defineStore } from 'pinia'

interface WeatherData {
  current: any
  hourly: {
    time: any
    weather_code: any
    temperature_2m: (number | string)[]
  }
  daily: {
    time: any
    weather_code: any
    temperature_2m_min: number[]
    temperature_2m_max: number[]
  }
}
export const useUserStore = defineStore('user', {
  state: () => ({
    weatherData: null as WeatherData | null,
    currentCity: '' as string,
  }),
  actions: {
    setWeatherData (data: WeatherData) {
      this.weatherData = data
    },
    setCurrentCity (city: string) {
      this.currentCity = city
    },
  },
})
