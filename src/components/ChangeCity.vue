<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { usCities } from '@/lib/us-cities'
import { fetchWeather, getCityCoordinates } from '~/lib/utils'

const userStore = useUserStore()
const searchQuery = ref('')
const filteredCities = computed(() => {
  if (!searchQuery.value) return []
  return usCities.filter(city =>
    city.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const handleSubmit = () => {
  console.log(filteredCities.value)
  if (filteredCities.value.length === 1) {
    handleChangeCity(filteredCities.value[0])
  } else {
    alert('Type a valid city name')
  }
}

const handleChangeCity = async (city: string) => {
  try {
    const { latitude, longitude, timezone } = await getCityCoordinates(city)
    searchQuery.value = ''
    const { weatherJson } = await fetchWeather(latitude, longitude, timezone)
    userStore.setWeatherData(weatherJson)
    userStore.setCurrentCity(city)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error) {
    console.error('Error finding city:', city, error)
  }
}

watch(filteredCities, (newCities) => {
  console.log('Filtered cities:', newCities)
})
</script>

<template>
  <div class="mb-36">
    <form @submit.prevent="handleSubmit">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for a city..."
        class="w-full px-4 py-2 rounded-lg bg-sky-700 text-white placeholder-sky-300 outline-none focus:ring-2 focus:ring-sky-400 mt-5"
      >
      <div
        v-if="filteredCities.length > 0"
        v-intersection="() => window.scrollTo(0, document.body.scrollHeight)"
        class="mt-1 bg-sky-700 rounded-lg max-h-48 overflow-y-auto"
      >
        <div
          v-for="city in filteredCities"
          :key="city"
          class="px-4 py-2 hover:bg-sky-600 cursor-pointer"
          @click="handleChangeCity(city)"
        >
          {{ city }}
        </div>
      </div>
    </form>
  </div>
</template>
