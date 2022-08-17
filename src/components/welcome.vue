<template>
    <h1>Start counting down your birthday</h1>
    <div>
        <span>Month: </span>
        <input v-model="date.month" />
        <span>Day:</span>
        <input v-model="date.day" />
    </div>
    <button @click="SetVisited(); SaveSettings()">Done</button>
</template>

<script setup lang="ts">
import { GetDate, SetDate, SetVisited } from "../storage.js"
import { reactive, onMounted } from "vue"

let date = reactive({
    month: "", day: ""
})

onMounted(() => {
    date = GetDate()
})

function SaveDate() {
    SetDate(date)
}

</script>