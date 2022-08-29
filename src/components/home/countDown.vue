<template>
  <to-settings></to-settings>
  <h1>YOUR BIRTHDAY</h1>
  <number-shower :value="deltaDate" unit="day"></number-shower>
  <number-shower :value="restTime.hour" unit="hour"></number-shower>
  <number-shower :value="restTime.minute" unit="minute"></number-shower>
  <number-shower :value="restTime.second" unit="second"></number-shower>
  <h1>away</h1>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { ref, watchEffect } from 'vue'

import toSettings from './toSettings.vue'
import numberShower from './numberShower.vue'

import { GetDate } from '../../ts/storage'
import { DateEq, DateSub, RestTime, Time } from '../../ts/dateCalc'
import { useRouter } from 'vue-router'

const router = useRouter()

let birthday = ref(GetDate())
setTimeout(function Update() {
  birthday.value = GetDate()
  setTimeout(Update, 1000)
}, 1000)

let deltaDate = ref(0)
let restTime = ref<Time>({
  hour: 0,
  minute: 0,
  second: 0
})
watchEffect(() => {
  const nowDate = {
    month: dayjs().month() + 1,
    day: dayjs().date()
  }
  if (DateEq(nowDate, birthday.value)) router.push('happy-birthday')
  deltaDate.value = DateSub(nowDate, birthday.value)
  restTime.value = RestTime()
})
</script>
