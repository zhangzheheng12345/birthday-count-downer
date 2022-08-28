<template>
  <router-link class="float" to="/settings">
    <img src="./svgs/settings.svg" />
  </router-link>
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
import { GetDate } from '../../ts/storage'
import { DateEq, DateSub } from '../../ts/dateCalc'
import { useRouter } from 'vue-router'

let birthday = GetDate()
setTimeout(function Update() {
  birthday = GetDate()
  setTimeout(Update, 1000 * 2)
}, 1000 * 2)

let deltaDate: number
watchEffect(() => {
  const now = {
    month: dayjs().month() + 1,
    day: dayjs().date()
  }
  if (DateEq(now, birthday)) useRouter().push('happy-birthday')
  deltaDate = DateSub(now, birthday)
})
</script>
