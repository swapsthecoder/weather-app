<script setup lang="ts">
const userStore = useUserStore()
const { weatherData } = storeToRefs(userStore)
</script>

<template>
  <div>
    <div class="text-center text-5xl drop-shadow-sm">
      {{ userStore.currentCity }}
    </div>
    <div class="text-center text-8xl font-light m-1 drop-shadow-lg">
      {{ weatherData?.current?.temperature_2m }}°
    </div>
    <div class="text-center text-2xl drop-shadow-sm text-[rgb(149,212,250)]">
      Feels Like: {{ weatherData?.current?.apparent_temperature }}°
    </div>
    <div class="text-center flex justify-center gap-4 text-2xl drop-shadow-sm">
      <span>H: {{ Math.round(weatherData?.daily?.temperature_2m_max[0] ?? 0) }}°</span>
      <span>L: {{ Math.round(weatherData?.daily?.temperature_2m_min[0] ?? 0) }}°</span>
    </div>
  </div>
</template>
