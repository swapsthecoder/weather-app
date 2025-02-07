<script setup lang="ts">
const props = defineProps<{
  weatherCode: number
}>()
</script>

<template>
  <div>
    <svg
      v-if="weatherCode === 0 || weatherCode === 1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Clear Sky"
    >
      <use href="../icons/clear-sky.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 2"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Partly Cloudy"
    >
      <use href="../icons/partly-cloudy.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 3"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Partly Cloudy"
    >
      <use href="../icons/cloudy.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 45 || weatherCode === 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Foggy"
    >
      <use href="../icons/foggy.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 51 || weatherCode === 53 || weatherCode === 55 || weatherCode === 56 || weatherCode === 57"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Rainy"
    >
      <use href="../icons/drizzle.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 61 || weatherCode === 80"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Rainy"
    >
      <use href="../icons/light-rain.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 63 || weatherCode === 81"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Rainy"
    >
      <use href="../icons/moderate-rain.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 65 || weatherCode === 82"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Rainy"
    >
      <use href="../icons/heavy-rain.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Rainy"
    >
      <use href="../icons/light-rain.svg#Dibujo" />
    </svg>
    <svg
      v-else-if="weatherCode === 67"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Rainy"
    >
      <use href="../icons/heavy-rain.svg#Dibujo" />
    </svg>
    <img
      v-else-if="weatherCode === 71 || weatherCode === 73 || weatherCode === 75 || weatherCode === 77 || weatherCode === 85 || weatherCode === 86"
      src="../icons/snow.svg"
      class="w-10 h-10 p-1"
      style="filter: invert(1)"
      alt="Snowy"
    >
    <svg
      v-else-if="weatherCode === 95 || weatherCode === 96 || weatherCode === 99"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 96 96"
      class="w-10 h-10"
      style="filter: invert(1)"
      aria-label="Thunderstorm"
    >
      <use href="../icons/thunderstorm.svg#Dibujo" />
    </svg>
    <img
      v-else-if="weatherCode === 100"
      src="../icons/sunrise.png"
      class="w-10 h-10 p-1"
      style="filter: invert(1)"
      alt="Sunrise"
    >
    <img
      v-else-if="weatherCode === 101"
      src="../icons/sunset.png"
      class="w-10 h-10 p-1"
      style="filter: invert(1)"
      alt="Sunset"
    >
    <img
      v-else-if="weatherCode === 102"
      src="../icons/clear-night.svg"
      class="w-10 h-10 p-3"
      style="filter: invert(1)"
      alt="Clear Night"
    >
  </div>
</template>
