<template>
  <div class="flex justify-end items-center m-2">
    <button class="mt-0 mb-0 text-23px" :class="isDark ? 'i-carbon-moon' : 'i-carbon-sun'" @click="toggleDark()"/>
    <router-link class="i-carbon-home text-inherit lh-100% mt-0" to="/home"></router-link>
  </div>
  <h1 class="mb-5 tracking-in-expand">Settings</h1>
  <form-vue></form-vue>
</template>

<script setup lang="ts">
import formVue from '@/components/form.vue'

import { isDark, toggleDark } from '@/ts/isDark'
</script>
