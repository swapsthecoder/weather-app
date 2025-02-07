<template>
  <div class="text-center fixed top-4 left-4">
    {{
      new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      })
    }}
  </div>
</template>
