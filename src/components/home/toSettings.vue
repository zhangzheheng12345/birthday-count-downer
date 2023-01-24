<template>
  <div class="flex justify-end items-center m-2">
    <button class="mt-0 mb-0 text-23px" :class="isDark ? 'i-carbon-moon' : 'i-carbon-sun'" @click="toggleDark()"/>
    <router-link
      class="i-carbon-settings text-inherit mt-0 lg-100%"
      to="/settings"
    ></router-link>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/ts/isDark'
</script>
