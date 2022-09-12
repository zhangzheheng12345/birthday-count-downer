<template>
  <div id="wrapForm" class="m-10px">
    <div class="bounce-in-right">
      <span>Month: </span>
      <input v-model="date.month" enterkeyhint="next" inputmode="tel" />
    </div>
    <div class="bounce-in-right">
      <span>Day:</span>
      <input v-model="date.day" enterkeyhint="done" inputmode="tel" />
    </div>
    <button @click="Done" class="bounce-in-bottom">Done</button>
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
