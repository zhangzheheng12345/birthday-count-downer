<template>
  <div>
    <h1
      class="text-55px m-4 tracking-wider border-5"
      :class="{
        'text-60px': props.unit == 'day'
      }"
    >
      {{ props.value }}
    </h1>
    <h1 class="text-55px" :class="{ 'text-60px': props.unit == 'day' }">
      {{ props.unit + (props.value == 1 ? '' : 's') }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ value: number; unit: string }>()
</script>
