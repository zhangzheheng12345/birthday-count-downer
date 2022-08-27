<template>
  <h1>Your birthday is</h1>
  <h1>
    {{ deltaDate }}
    day{{ deltaDate == 1 ? '' : 's' }}
  </h1>
  <h1>away</h1>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { reactive, watchEffect } from 'vue'
import { GetDate } from '../ts/storage'
import { DateSub } from '../ts/dateCalc'

let birthday = GetDate()
let now = reactive(dayjs())
setTimeout(function () {
  birthday = GetDate()
  now = dayjs()
}, 1000 * 60)

let deltaDate: number
watchEffect(() => {
  deltaDate = DateSub(birthday, { month: dayjs().month(), day: dayjs().day() })
})
</script>
