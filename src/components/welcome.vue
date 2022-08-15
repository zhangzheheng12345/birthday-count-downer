<template>
    <h1>Welcome to birthday-count-downer</h1>
    <p>Count down your birthday from now on!</p>
    <div>
        <span>Month: </span>
        <input v-model="date.month" />
        <span>Day:</span>
        <input v-model="date.day" />
    </div>
    <button @click="SetVisited(); SaveSettings()">Done</button>
</template>

<script setup lang="ts">
import { GetSettings, SetSettings, SetVisited } from "../storage.js"
import { reactive, onMounted } from "vue"

let date = reactive({
    month: "", day: ""
})

onMounted(() => {
    date = GetSettings()
    console.log(date.month)
})

function SaveSettings() {
    SetSettings("month", date.month)
    SetSettings("day", date.day)
}

</script>