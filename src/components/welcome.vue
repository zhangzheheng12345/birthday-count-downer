<template>
    <h1>Welcome to birthday-count-downer</h1>
    <p>Count down your birthday from now on!</p>
    <date-inputer v-model:inMonth="date.month" v-model:inDay="date.day"></date-inputer>
<button @click="SetVisited">Done</button>
</template>

<script setup lang="ts">
import dateInputer from './dateInputer.vue'
import { GetSettings, SetSettings, SetVisited } from "../storage.js"
import { reactive, watchEffect, onMounted } from "vue"

let date = reactive({
    month: "", day: ""
})

onMounted(() => {
    let settings = GetSettings()
    date.month = settings.month
    date.day = settings.day
})

watchEffect(() => {
    SetSettings("month", date.month)
    SetSettings("day", date.day)
})
</script>

<style scoped>
input {
    margin: 5px;
    padding: 5px;
}
</style>