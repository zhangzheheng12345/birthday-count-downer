<template>
  <div class="flex justify-end m-3">
    <router-link
      class="i-carbon-home text-inherit"
      to="/home"
    ></router-link>
  </div>
  <h1 class="mb-5 tracking-in-expand">Settings</h1>
  <form-vue></form-vue>
</template>

<script setup lang="ts">
import formVue from '@/components/form.vue'
</script>
