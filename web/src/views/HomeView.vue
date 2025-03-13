<template>
  <div class="wall-index">
    <TopBar/>
    <video src="../assets/images/qm1.mp4" :autoplay="autoplay" :muted="nuted" :loop="loop" class="bg-video"></video>
    <router-view></router-view>
    <FootBar/>
  </div>
</template>

<script setup lang="ts">
import TopBar from '../components/TopBar.vue'
import FootBar from '../components/FootBar.vue'
const autoplay = true
const nuted = true
const loop = true
</script>

<style scoped lang="less">
.wall-index{
    .bg-video{
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        height: 840px;
    }
}
</style>
