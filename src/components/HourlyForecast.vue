<script setup lang="ts">
const userStore = useUserStore()
const { weatherData } = storeToRefs(userStore)
</script>

<template>
  <div class="flex overflow-x-auto gap-2 max-w-[400px] mt-12 bg-sky-600 rounded-lg">
    <div
      v-for="(hour, index) in weatherData?.hourly.time"
      :key="hour"
      class="flex flex-col items-center justify-center p-4 min-w-[72px]"
    >
      <div class="text-center min-w-fit text-sm">
        <div class="flex items-center">
          <span v-if="index === 0" class="text-base">Now</span>
          <template v-else-if="hour === weatherData?.daily.sunrise[0] || hour === weatherData?.daily.sunset[0]">
            <span class="text-base">
              {{
                new Date(hour).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true
                }).split(' ')[0]
              }}
            </span>
            <span class="text-[10px] text-sky-200">
              {{
                new Date(hour).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true
                }).split(' ')[1]
              }}
            </span>
          </template>
          <template v-else>
            <span class="text-base">
              {{
                new Date(hour).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  hour12: true
                }).split(' ')[0]
              }}
            </span>
            <span class="text-[10px] text-sky-200">
              {{
                new Date(hour).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  hour12: true
                }).split(' ')[1]
              }}
            </span>
          </template>
        </div>
      </div>
      <div class="text-center">
        <WeatherIcon
          :weather-code="weatherData?.hourly.weather_code[index]"
        />
      </div>
      <div class="text-center text-lg">
        {{ typeof weatherData?.hourly.temperature_2m[index] === 'string' 
          ? weatherData?.hourly.temperature_2m[index]
          : Math.round(weatherData?.hourly.temperature_2m[index] ?? 0) + '°' }}
      </div>
    </div>
  </div>
</template>
