<template>
    <button :class="[size,nom]" class="yc-button"><slot></slot></button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
    size: {
        type: String,
        default: 'base',
    },
    nom: {
        type: String,
        default: 'primary',
    },
});

</script>

<style  lang="less" scoped>
@import '../style/commons.less';
.yc-button{
    text-align: center;
    border: none;
    cursor: pointer;
}
.max{
    min-width: 100px;
    height: 36px;
    border-radius: 24px;
    padding: 0 20px;
}
.base{
    min-width: 80px;
    height: 36px;
    border-radius: 24px;
    padding: 0 20px;
}
.small{
    min-width: 72px;
    height: 32px;
    border-radius: 24px;
    padding: 0 20px;
}

.primary{
    background: @gray-1;
    color: @gray-10;
}

.secondary{
    background: none;
    color: @gray-1;
    border:1px solid @gray-1;
}

.cprimary{
    background: @primary-color;
    color: @gray-10;
    font-weight: 600;
}

.csecondary{
    background: @gray-10;
    color: @gray-1;
}
.notallowed{
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
