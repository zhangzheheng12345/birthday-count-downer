<template>
    <welcome v-if="!HaveVisited()"></welcome>
    <countDown v-else></countDown>
</template>

<script setup lang="ts">
import happyBirthday from './components/happyBirthday.vue'
import countDown from './components/countDown.vue'
import settings from './components/settings.vue'
import welcome from './components/welcome.vue'
import { HaveVisited } from './storage.js'
</script>

<!-- Global Styles -->
<style>
@import url('https://fonts.cdnfonts.com/css/mahone-sans');

h1 {
    font-family: 'Mahone Sans', sans-serif;
    font-size: 50px;
}

input {
    margin: 5px;
    padding: 5px;
}
</style>