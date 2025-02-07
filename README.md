# Weather App

### Goal
Replicate the look and feel of the [Apple Weather App](https://github.com/OatsOvernight/coding-challenge-weather-app/blob/main/public/apple-weather.jpeg)

### Tech Stack
* [Nuxt](https://nuxt.com)
* [Tailwind](https://tailwindcss.com)
* [Pinia](https://pinia.vuejs.org)
* [Weather API](https://open-meteo.com/en/docs)
* [Weather Icons](https://github.com/basmilius/weather-icons/tree/dev)
* [Geolocation](https://opencagedata.com/)
 

### Features
* <CurrentTemp> component powers the top section of the app. It shows the at-a-glance info like current temp, feels like temp, and hi/low temps for the day. 
* <HourlyForecast> component powers the middle section of the app. It shows today's forecast for the next 24 hours, in increments of 1 hour. Sunrise and sunset times are calculated and injected between the appropriate hourly slots. Between the hours of sunset to sunrise, a moon icon is used to indicate night time instead of daytime. The weather icon that is displayed is dictated by the WMO weather interpretation codes as they are returned by the open-meteo API. 
* <WeekForecast> component powers the bottom section of the app. It shows the daily forecast for the next week, in increments of 1 day. The weather icon that is displayed is dictated by the WMO weather interpretation codes as they are returned by the open-meteo API. 
* <ChangeCity> component powers the very bottom input field section of the app. It allows the user to type a city name and filters down the possible cities as the user continues to type. The list of possible cities only covers the United States and was acquired from a different github repo. The user has the option to either click on one of the cities in the dropdown list or simply hit enter if the list of cities has been narrowed down to 1. There is also some light error handling and form validation to alert the user if the search isn't narrow enough, or if there was an error fetching data from a particular city. Once a city has been successfully chosen, the page scrolls to the top and the new city's weather data is hydrated into the app. 
* Geolocation is powered by the Open Cage Geolocation API. On first page load, the user's latitude, longitude, city and timezone are all acquired and used to fetch weather information from their current location. Note that the user has to allow location permissions in their browser. The same API is used to get the latitude, longitude, city and timezone of a city that a user might select when using the ChangeCity input at the very bottom of the app. 