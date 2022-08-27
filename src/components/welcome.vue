<template>
  <h1>Start counting down your birthday</h1>
  <div>
    <span>Month: </span>
    <input v-model="date.month" />
    <span>Day:</span>
    <input v-model="date.day" />
  </div>
  <button @click="Done">Done</button>
</template>

<script setup lang="ts">
import { GetDate, SetDate, SetVisited } from '../ts/storage'
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let date = reactive({
  month: 0,
  day: 0
})

onMounted(() => {
  date = GetDate()
})

function Done() {
  SetVisited()
  SetDate(date)
  router.push('home')
}
</script>
