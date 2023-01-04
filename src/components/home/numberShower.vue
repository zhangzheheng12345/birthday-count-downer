<template>
  <div>
    <h1
      class="text-5xl m-4 tracking-wider rounded-2xl border-5"
      :class="{
        'text-6xl': props.unit == 'day'
      }"
    >
      {{ props.value }}
    </h1>
    <h1 class="text-3xl" :class="{ 'text-4xl': props.unit == 'day' }">
      {{ props.unit + (props.value == 1 ? '' : 's') }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ value: number; unit: string }>()
</script>
