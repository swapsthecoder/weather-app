<script setup lang="ts">
import { fetchWeather, getUserLocation } from '@/lib/utils'

const userStore = useUserStore()
const { weatherData } = storeToRefs(userStore)

const initWeather = async () => {
  const { latitude, longitude, city, timezone } = (await getUserLocation()) as {
    latitude: number
    longitude: number
    city: string
    timezone: string
  }
  const { weatherJson } = await fetchWeather(latitude, longitude, timezone)
  userStore.setWeatherData(weatherJson)
  userStore.setCurrentCity(city)
}
initWeather()
</script>

<template>
  <div class="flex items-center justify-center p-10 bg-sky-500 min-h-screen text-white">
    <div v-if="weatherData">
      <div>
        <Time />
        <CurrentTemp />
        <HourlyForecast />
        <WeekForecast />
        <ChangeCity />
      </div>
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>
