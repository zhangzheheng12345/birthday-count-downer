<template>
    <div>
        <span>Month: </span>
        <input v-model="month"/>
        <span>Day:</span>
        <input v-model="day"/>
    </div>
</template>

<script>
export default {
    props: ["inMonth", "inDay"],
    emits: ["update:inMonth", "update:inDay"],
    computed: {
        month: {
            get() { return this.inMonth },
            set(value) { this.$emit("update:inMonth", value) }
        },
        day: {
            get() { return this.inDay },
            set(value) { this.$emit("update:inDay", value) }
        }
    }
}
</script>