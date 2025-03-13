<template>
    <div class="foot-bar" :class="{ 'foot-bar-visible': isFooterVisible }">
      <div class="foot-bar-inner">
        <div class="foot-left">
          <div class="logo">
            <img src="../assets/logo.svg" style="width: 40px;" alt="logo">
            <p class="logo-name">一窗月光</p>
          </div>
          <p class="top-p" style="font-size: larger;">欢迎来到一窗月光，分享你的故事和照片。</p>
          <div class="state">
            <span></span>
            <span>总访问量：10000</span>
          </div>
        </div>
        <div class="link">
          <div class="link-inner">
            <a href="#">关于我们312312312</a>
        
          </div>
        </div>
        <div class="foot-right">
            <div>
              <p class="ds-title">欢迎打赏</p>
              <div class="right-inner">
              <img src="../assets/wx.jpg" alt="social" style="width: 150px; height: 150px;">
            </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isFooterVisible = ref(false);
  
  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
  
    if (scrollTop + windowHeight >= documentHeight - 50) {
      isFooterVisible.value = true;
    } else {
      isFooterVisible.value = false;
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style lang="less" scoped>
  @import '../style/commons.less';
  
  .foot-bar {
    position: fixed;
    bottom: -200px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom, @gray-1, @gray-2);
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    color: @gray-10;
    transition: bottom 0.5s ease;
  
    .foot-bar-inner {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
  
      p {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  
    .foot-left {
      .logo {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
  
        .logo-name {
          font-size: 20px;
          color: @gray-10;
          font-weight: 600;
          padding-left: 10px;
        }
      }
  
      .top-p {
        font-size: @size-12;
        padding-bottom: 4px;
        width: 400px;
      }
  
      .state {
        font-size: @size-12;
        padding-top: 26px;
  
        span {
          padding-right: 20px;
        }
      }
    }
  
    .link {
      padding: 0 40px;
      flex: 1;
  
      .link-inner {
        a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          padding-right: 20px;
          position: relative;
          transition: color 0.3s;
  
          &::after {
            content: '|';
            position: absolute;
            right: 10px;
            color: rgba(255, 255, 255, 0.3);
          }
  
          &:last-child::after {
            content: '';
          }
  
          &:hover {
            color: @gray-10;
          }
        }
      }
    }
  
    .foot-right {
      .right-inner {
        display: flex;
        align-items: center;
  
        img {
          width: 20px;
          margin-right: 10px;
        }
  
        .ds-title {
          font-size: @size-12;
          padding-top: 8px;
        }
      }
    }
  }
  
  .foot-bar-visible {
    bottom: 0;
  }
  
  @media (max-width: 768px) {
    .foot-bar-inner {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .foot-left,
    .foot-right {
      margin-bottom: 20px;
    }
  
    .link {
      padding: 0;
    }
  }
  </style>