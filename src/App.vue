<template>
    <welcome v-if="!HaveVisited()"></welcome>
    <countDown v-else></countDown>
</template>

<script setup>
import happyBirthday from './components/happyBirthday.vue'
import countDown from './components/countDown.vue'
import settings from './components/settings.vue'
import welcome from './components/welcome.vue'
import { HaveVisited } from './storage.js'
</script>