<template>
    <div>
        <span>Month: </span>
        <input v-model="month" />
        <span>Day:</span>
        <input v-model="day" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { inMonth, inDay } = defineProps<{
    inMonth: string
    inDay: string
}>()

const emits = defineEmits<{
    (e: 'update:inMonth', value: string): void
    (e: 'update:inDay', value: string): void
}>()

let month = computed({
    get() { return inMonth },
    set(value) { emits("update:inMonth", value) }
})
let day = computed({
    get() { return inDay },
    set(value) { emits("update:inDay", value) }

})

</script>