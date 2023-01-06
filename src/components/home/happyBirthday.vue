<template>
  <to-settings></to-settings>

  <div class="flex justify-center flex-wrap">
    <div class="w-95% max-w-450px border-5 m-3 mb-5">
      <h1 class="m-0 tracking-in-expand">HAPPY</h1>
      <h1 class="m-0 tracking-in-expand">BIRTHDAY</h1>
      <h1 class="m-0 text-10 mb-2">🎂🎉🥂🍾</h1>
    </div>
    <div class="w-100%">
      <div class="flex justify-center">
        <img :src="srcName" class="max-w-400px object-contain" />
      </div>
    </div>
    <div class="w-100% flex justify-center">
      <button
        class="w-90% max-w-450px m-2"
        :class="{ 'jello-horizontal': toJello }"
        @click="ChangeCake"
      >
        Change a cake...
      </button>
    </div>
  </div>
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
