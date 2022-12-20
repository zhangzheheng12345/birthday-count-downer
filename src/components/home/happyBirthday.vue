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
import { imgSrcList } from '@/ts/cakePhotos'

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
