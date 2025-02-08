<script setup lang="ts">
const props = defineProps<{
  weatherCode: number
}>()
</script>

<template>
  <div>
    <img
      v-if="weatherCode === 0 || weatherCode === 1"
      src="../icons/clear-day.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Clear Sky"
    >
    <img
      v-else-if="weatherCode === 2"
      src="../icons/partly-cloudy-day.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Partly Cloudy"
    >
    <img
      v-else-if="weatherCode === 3"
      src="../icons/cloudy.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Cloudy"
    >
    <img
      v-else-if="weatherCode === 45 || weatherCode === 48"
      src="../icons/fog.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Foggy"
    >
    <img
      v-else-if="weatherCode === 51 || weatherCode === 53 || weatherCode === 55 || weatherCode === 56 || weatherCode === 57"
      src="../icons/drizzle.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Drizzly"
    >
    <img
      v-else-if="weatherCode === 61 || weatherCode === 80"
      src="../icons/rain.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Light Rain"
    >
    <img
      v-else-if="weatherCode === 63 || weatherCode === 81"
      src="../icons/rain.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Moderate Rain"
    >
    <img
      v-else-if="weatherCode === 65 || weatherCode === 82"
      src="../icons/rain.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Heavy Rain"
    >
    <img
      v-else-if="weatherCode === 66 || weatherCode == 67"
      src="../icons/rain.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Freezing Rain"
    >
    <img
      v-else-if="weatherCode === 71 || weatherCode === 73 || weatherCode === 75 || weatherCode === 77 || weatherCode === 85 || weatherCode === 86"
      src="../icons/snow.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Snowy"
    >
    <img
      v-else-if="weatherCode === 95 || weatherCode === 96 || weatherCode === 99"
      src="../icons/thunderstorms.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Thunderstorms"
    >
    <img
      v-else-if="weatherCode === 100"
      src="../icons/sunrise.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Sunrise"
    >
    <img
      v-else-if="weatherCode === 101"
      src="../icons/sunset.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Sunset"
    >
    <img
      v-else-if="weatherCode === 102"
      src="../icons/clear-night.svg#Dibujo"
      class="w-10 h-10 p-1"
      alt="Clear Night"
    >
  </div>
</template>
