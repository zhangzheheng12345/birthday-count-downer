<template>
  <to-settings></to-settings>
  <div class="border-5 m-3 mb-5">
    <h1 class="m-0 tracking-in-expand">HAPPY</h1>
    <h1 class="m-0 tracking-in-expand">BIRTHDAY</h1>
    <h1 class="m-0 text-10 mb-3">🎂🎉🥂🍾</h1>
  </div>
  <img :src="srcName" />
  <button
    class="w-11/12 m-3"
    :class="{ 'jello-horizontal': toJello }"
    @click="ChangeCake"
  >
    Change a cake...
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import toSettings from './toSettings.vue'

const imgSrcList = [
  'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80',
  'https://images.unsplash.com/photo-1623842529695-f056295fd8e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
  'https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
  'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  'https://images.unsplash.com/photo-1552689486-ce080445fbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80'
]
let srcName = ref('')
let toJello = ref(false)

onMounted(() => {
  srcName.value = imgSrcList[Math.floor(Math.random() * imgSrcList.length)]
})

function ChangeCake() {
  let tmp = srcName.value
  while (tmp == srcName.value) {
    srcName.value = imgSrcList[Math.floor(Math.random() * imgSrcList.length)]
  }
  toJello.value = true
  setTimeout(function () {
    toJello.value = false
  }, 1000)
}
</script>

<style scoped>
img {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  min-height: 5rem;
}
</style>
