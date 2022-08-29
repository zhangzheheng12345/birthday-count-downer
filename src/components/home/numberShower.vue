<template>
  <h1
    class="text-7xl m-4.5 mt-5 tracking-wider rounded-2xl border-5 border-grey-400"
    :class="{
      'animate-bounce': props.unit == 'second' || toBounce,
      'text-7xl': props.unit == 'day'
    }"
  >
    {{ props.value }}
  </h1>
  <h1 class="text-3xl" :class="{ 'text-4xl': props.unit == 'day' }">
    {{ props.unit + (props.value == 1 ? '' : 's') }}
  </h1>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ value: number; unit: string }>()

let toBounce = ref(false)
if (props.unit != 'second')
  watch(props, () => {
    toBounce.value = true
    setTimeout(function () {
      toBounce.value = false
    }, 1200)
  })
</script>
