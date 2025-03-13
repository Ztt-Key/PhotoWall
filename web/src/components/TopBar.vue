<template>
  <div class="top-bar">
    <div class="logo">
        <img src="../assets/logo.svg" alt="logo">
        <p class="logo-name">一窗月光</p>
    </div>
        <div class="menu">
     <YC-Button  :nom="id==0?'cprimary':'csecondary'" class="menu-message" @click="Toggle(0)" >留言墙</YC-Button>
     <YC-Button  :nom="id==1?'cprimary':'csecondary'" class="menu-photo" @click="Toggle(1)"> 照片墙</YC-Button>
        </div>
        <div class="user">
            <div class="user-head"></div> 
        </div>
  </div>
</template>

<script setup lang="ts">
import YCButton from './YCButton.vue';
import { ref, onMounted   } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const id = ref<Object|null>(null)
const router = useRouter()

function Toggle(e:any) {
  id.value = e
  router.push({
    path: '/wall',
    query: { id: e }
  })
}

onMounted(() => {
  id.value = Number(route.query.id) || 0
  console.log(`the component is now mounted.${id.value}`)
})
</script>

<style lang="less" scoped >
  .top-bar{
    width: 100%;
    height: 52px;
    background: rgba(255,255,255,0.80);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    .logo{
        display: flex;
        align-items: center;
        width: 300px;
        .logo-name{
            font-size: 20px;
            color: #202020;
            font-weight: 600;
            padding-left: 10px;
        }
      
    }
    .menu{
        .menu-message{
            margin-right: 24px;
        }
    }
    .user{
        width: 300px;
        .user-head{
            float: right;
            border-radius: 50%;
            height: 36px;
            width: 36px;
            background-image: linear-gradient(180deg, rgba(6, 81, 243, 0.5) 0%, #da0808 100%);
        }
    }
    img{
        width: 30px;
    }
  }
</style>
