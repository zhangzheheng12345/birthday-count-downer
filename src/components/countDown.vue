<template>
    <h1>Your birthday is</h1>
	<h1>{{deltaDate.month}} Months {{deltaDate.day}} Days</h1>
	<h1>away</h1>
</template>

<script setup lang="ts">
	import {dayjs} from 'dayjs'
	import {computed, reactive} from "vue"
	import {GetDate} from '../storage.js'

	let birthday = GetDate()
	let now = reactive(dayjs())
    setTimeOut(function() {
		birthday = GetDate()
		now = dayjs()
	}, 1000 * 1000)
	
	let deltaDate = computed(()=>{
		return {
			// TODO: To calculate e.g. 10.1(present) to 7.1(birthday)
			month: +birthday.month - now.month(),
			day: +birthday.day - now.day()
		}
	})
</script>