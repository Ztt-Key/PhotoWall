<template>
  <div class="wall-message">
    wall
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.query.id

console.log('当前路由参数:', id)
</script>

<style scoped lang="less">
@import '../style/commons.less';
.wall-message {
  min-height: 1700px;
  padding-top: 52px;
  .title {
    padding-top: 48px;
    padding-bottom: @padding-8;
    font-size: 56px;
    color: @gray-1;
    text-align: center;
    font-weight: 600;
  }

  .slogan {
    color: @gray-2;
    text-align: center;

  }

  .label {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .label-list {
      padding: 0 14px;
      display: flex;
      align-items: center;
      height: 30px;
      margin: @padding-4;
      color: @gray-2;
      box-sizing: border-box;
      cursor: pointer;
    }

    .lbselected {
      color: @gray-1;
      font-weight: 600;
      border: 1px solid @gray-1;
      border-radius: 16px;
    }
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    padding-top: 28px;
    margin: auto;

    .card-inner {
      margin: 6px;
    }

    .cardSelected {
      border: 1px solid @primary-color;
    }
  }

  .photo {
    width: 88%;
    margin: 0 auto;
    columns: 6;
    column-gap: @padding-4;
  }

  .photo-card {
    margin-bottom: @padding-4;
    break-inside: avoid;
  }

  .add {
    width: 56px;
    height: 56px;
    background: @gray-1;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
    border-radius: 28px;
    position: fixed;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: @tr;

    .icon-tianjia- {
      color: @gray-10;
      font-size: 24px;
    }
  }

  .none-msg {
    width: 100%;
    text-align: center;
    padding-top: 70px;
    position: absolute;
    top: 280;

    img {
      width: 80px;
      display: inline;
    }

    p {
      font-family: serif;
      font-weight: 700;
      font-size: 24px;
      color: @gray-3;
    }
  }

  .loading {
    text-align: center;
    width: 100%;

    p {
      margin-top: -12px;
      font-family: serif;
      font-size: 24px;
      color: @gray-3;
    }
  }

  #lottile {
    margin-top: 20px;
    height: 150px;
  }

  .bottom-tip {
    text-align: center;
    color: @gray-3;
    padding: 20px;
  }

}</style>
