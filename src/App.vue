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
@import url('https://fonts.cdnfonts.com/css/gogh');
@import url('https://fonts.cdnfonts.com/css/effra-trial?styles=133480');

* {
    font-family: 'Effra Trial', sans-serif;
    font-size: 18px;
}

h1 {
    font-family: 'Gogh', sans-serif;
    font-size: 50px;
}

input {
    margin: 5px;
    padding: 5px;
    border-radius: 0px;
    border-width: 3px;
    border-color: #333;
}
input:focus {
    outline: 0px;
}

button {
    margin: 5px;
    padding: 5px;
    border-radius: 0px;
    border-width: 3px;
    border-color: #333;
    background-color: #fff;
    color: #000;
}
</style>