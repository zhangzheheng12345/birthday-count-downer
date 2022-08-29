<template>
  <div id="wrapForm">
    <span>Month: </span>
    <input v-model="date.month" />
    <br />
    <span>Day:</span>
    <input v-model="date.day" />
    <br />
    <button @click="Done">Done</button>
  </div>
</template>

<script setup lang="ts">
import { GetDate, SetDate, SetVisited } from '../ts/storage'
import { ref, onMounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const emits = defineEmits(['done'])

const router = useRouter()
let date = ref({
  month: 0,
  day: 0
})

onMounted(() => {
  date.value = GetDate()
})

watchEffect(() => {
  console.log(date)
})

function Done() {
  SetVisited()
  SetDate(date.value)
  router.push('home')
  emits('done')
}
</script>

<style scoped>
#wrapForm {
  margin: 10px;
}
</style>
