<template>
  <div class="flex justify-end m-2">
    <button class="m-0 text-inherit" :class="isDark ? 'i-carbon-moon' : 'i-carbon-sun'" @click="toggleDark()"/>
    <router-link
      class="i-carbon-settings text-inherit"
      to="/settings"
    ></router-link>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/ts/isDark'
</script>
