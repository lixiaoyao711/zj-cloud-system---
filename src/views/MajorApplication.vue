<template>
    <div class="MajorApplication">
        <main>
            <div class="left">
                <ItemLeft :titleName="'同心共富'" />
                <ItemLeft :deg="0.5" :titleName="'多党合作在线'" />
                <ItemLeft :deg="-1" :titleName="'浙里党外代表人士全链条管理服务'" />
            </div>
            <div class="center">
                <Center />
            </div>
            <div class="right">
                <ItemRight :titleName="'浙里宗教智治'" />
                <ItemRight :deg="-1.5" :titleName="'浙里民族团结石榴红'" />
                <ItemRight :deg="-0.5" :titleName="'浙商在线'" />
                <ItemRight :deg="1" :titleName="'浙里为侨服务全球通'" />
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
<script setup>
import ItemLeft from '@/components/MajorApplication/ItemLeft';
import ItemRight from '@/components/MajorApplication/ItemRight';
import Center from '@/components/MajorApplication/Center';
import Footer from '@/components/MajorApplication/Footer';

import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import $store from '@/store';
import { useRouter } from 'vue-router';
const router = useRouter();
const emit = defineEmits(['close']);
const props = defineProps({});
const {} = props;
const test = computed(() => {
    return null;
});
watch(() => {});
onMounted(() => {});
onUnmounted(() => {});
</script>
<style lang="less" scoped>
main {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    height: calc(100% - 63px);
    .left {
        width: 348px;
        height: 916px;
        background-image: linear-gradient(-88deg, rgba(210, 202, 244, 0) 0%, rgba(166, 154, 229, 0.1) 100%);
        border-radius: 20px 0 0 6px 20px;
        background-size: 100% 100% !important;
        background: url('@/assets/img/矩形备份 8.png') no-repeat;
        padding: 48px 0 0 36px;
        box-sizing: border-box;
    }
    .center {
        margin-top: 23px;
        padding: 43px 0px 0px 0px;
        box-sizing: border-box;
        width: 1080px;
        height: 850px;
        background: rgba(10, 24, 87, 0.2);
        box-shadow: 12px 12px 32px 0 rgba(22, 81, 154, 0.3), -12px -12px 32px 0 rgba(22, 81, 154, 0.3);
        border-radius: 20px;
    }
    .right {
        width: 348px;
        height: 916px;
        // height: calc(100% + 60px);
        background-image: linear-gradient(-88deg, rgba(210, 202, 244, 0) 0%, rgba(166, 154, 229, 0.1) 100%);
        border-radius: 20px 0 0 6px 20px;
        background-size: 100% 100% !important;
        background: url('@/assets/img/矩形备份 8(1).png') no-repeat;
        padding: 48px 36px 0 0px;
        box-sizing: border-box;
    }
}
</style>
