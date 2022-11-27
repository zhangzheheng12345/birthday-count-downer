<template>
  <div class="h-6"></div>
  <router-link class="float bg-white rounded-5 p-1 shadow-md" to="/home">
    <img src="./svgs/home.svg" class="scale-110" />
  </router-link>
  <h1 class="mb-5 tracking-in-expand">Settings</h1>
  <form-vue></form-vue>
</template>

<script setup lang="ts">
import formVue from '@/form.vue'
</script>
