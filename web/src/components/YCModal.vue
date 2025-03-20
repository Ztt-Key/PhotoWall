<template>
    <transition name="modal">
  <div class="yk-modal" v-if="shows">
    <div class="yk-modal-head">
        <p class="modal-name">{{ title }}</p>
        <span class="iconfont icon-guanbi"></span>
    </div>
  </div>
</transition>
</template>

<script setup lang="ts"> 
import { defineProps } from 'vue'
defineProps({
  shows:{
    type:Boolean,
  }
})
const title = '标题'
</script>

<style lang='less' scoped>
@import '../style/commons.less';
.modal {

    //入场
    &-enter {
        &-from {
            transform: translateX(360px);
        }

        &-active {
            transition: all 0.2s ease-out;

        }

        &-to {
            transform: translateX(0px);
        }
    }

    //出场
    &-leave {
        &-from {
            transform: translateX(0px);
        }

        &-active {
            transition: all 0.2s ease-in;

        }

        &-to {
            transform: translateX(360px);
        }
    }
}

.yk-modal {
    width: 360px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 52px;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(5px);
    // padding: @padding-20;
    // box-sizing: border-box;

    .yk-moda-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: @padding-20;
        box-sizing: border-box;


        .modal-name {
            font-size: 16px;
            color: @gray-1;
            font-weight: 600;
        }

        .icon-guanbi {
            color: @gray-2;
            cursor: pointer;
            padding-left: 8px;
        }
    }

    .yk-modal-main {
        // border: 1px solid red;
        height: 100%;
        overflow-y: auto;
        padding-bottom: 116px;
        box-sizing: border-box;

        overflow-x: auto;
        margin: 2px;
    }

    .slot {
        height: 1200px;
        background: #eee;
    }

    /* 滚动条样式 */
    .yk-modal-main::-webkit-scrollbar {
        width: 4px;
        /*  设置纵轴（y轴）轴滚动条 */
        height: 4px;
        /*  设置横轴（x轴）轴滚动条 */
    }

    /* 滚动条滑块（里面小方块） */
    .yk-modal-main::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.2);
    }

    /* 滚动条轨道 */
    .yk-modal-main::-webkit-scrollbar-track {
        border-radius: 4px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
    }

}
</style>
