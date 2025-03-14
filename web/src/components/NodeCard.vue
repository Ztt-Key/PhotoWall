<template>
    <div class="yk-node-card" :style="{ width: width, background: 'rgba(0,0,0,0.1)' }">
        <div class="top">
            <p class="time">{{ new Date(node.moment).toLocaleDateString() }}</p>
            <p class="label">{{ node.label }}</p>
        </div>
        <p class="message">{{ node.message }}</p>
        <div class="foot">
            <div class="foot-left">
                <div class="like">
                    <span class="iconfont icon-xiai"></span>
                    <span class="value">{{ node.like }}</span>
                </div>
                <div class="common">
                    <span class="iconfont icon-liuyan"></span>
                    <span class="value">{{ node.comment }}</span>
                </div>
            </div>
            <div class="name">{{ node.name }}</div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface NodeData {
    moment: Date;
    id: number;
    userid: number;
    message: string;
    label: number;
    name: string;
    like: number;
    comment: number;
    imgurl: string;
    revoke: number;
    report: number;
}

defineProps({
    width: { type: String, default: '288px' },
    node: {
        type: Object as () => NodeData,
        required: true
    }
})
</script>

<style lang='less' scoped>
@import '../style/commons.less';

@font-face {
    font-family: fa;
    src: url("../assets/fonts/zxh-zyxt.ttf");
}

.yk-node-card {
    height: 240px;
    padding: 10px 20px 60px;
    box-sizing: border-box;
    position: relative;
    margin: 6px;
    .top {
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;

        p {
            font-size: @size-12;
            color: @gray-3;
        }
    }

    .message {
        height: 140px;
        font-family: fa;
        font-size: 17px;
        color: @gray-1;
        cursor: pointer;

    }

    .foot {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 16px;
        left: 0;
        padding: 0 @padding-20;
        box-sizing: border-box;
        width: 100%;

        .foot-left {
            display: flex;

            .value {
                font-size: @size-12;
                color: @gray-3;
                line-height: 16px;
                padding-left: @padding-4;
            }

            .iconfont {
                font-size: @size-16;
                color: @gray-3;
            }

            .icon {
                padding-right: @padding-8;
                display: flex;
                align-items: center;
            }

            .icon-xiai {
                cursor: pointer;
                transition: @tr;

                &:hover {
                    color: @like;

                }
            }

            .islike {
                color: @like;
            }
        }
    }

    .name {
        font-family: fa;
        font-size: @size-16;
        color: @gray-1;

    }
}
</style>
