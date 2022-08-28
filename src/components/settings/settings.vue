<template>
  <router-link class="float" to="/home">
    <img src="./svgs/home.svg" />
  </router-link>
  <h1>Settings</h1>
  <form-vue></form-vue>
</template>

<script setup lang="ts">
import formVue from '../form.vue'
</script>
