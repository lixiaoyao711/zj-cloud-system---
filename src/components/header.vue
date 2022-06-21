<template>
    <div class="header">
        <div class="left">
            <img id="weather" src="@/assets/img/天气-多云.png" alt="" />
            <div class="time">
                <div>
                    {{ formatDateTime(newYear) }}
                </div>
                <div>
                    {{ newHours }}
                </div>
            </div>
            <div @click="menuClick(1)" class="menu1" :class="{ change1: currtIndex == 1 }">重大应用</div>
            <div @click="menuClick(2)" class="menu1" :class="{ change1: currtIndex == 2 }">任务执行</div>
        </div>
        <div class="right">
            <div @click="menuClick(3)" class="menu2" :class="{ change2: currtIndex == 3 }">七张问题清单</div>
            <div @click="menuClick(4)" class="menu2" :class="{ change2: currtIndex == 4 }">协同办公</div>
            <div class="work">工作台</div>
            <div class="headPortrait"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import { formatDateTime } from '@/utils/common';
import axios from 'axios';
import $store from '@/store';
import { useRouter } from 'vue-router';
let newYear = ref(new Date());
let currtIndex = ref(1);
const router = useRouter();
const emit = defineEmits(['close']);
const props = defineProps({});

const newHours = computed(() => {
    return `${newYear.value.getHours()}:${newYear.value.getMinutes()}`;
});
watch(() => {});
onMounted(() => {});
onUnmounted(() => {});

function toPath() {
    console.log(123);
    router.push('/about');
}
function menuClick(val) {
    console.log(val);
    currtIndex.value = val;
    switch (val) {
        case 1:
            router.push('/majorApplication');
            break;
        case 2:
            router.push('/taskExecution');
            break;
        case 4:
            router.push('/collaborativeOffice');
            break;
        default:
            break;
    }
}
</script>
<style lang="less" scoped>
.header {
    background-size: 100% 100%;
    height: 89px;
    background: url('@/assets/img/顶部.png') no-repeat;
    padding: 14px 18px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .change1 {
        // width: 10.20833333vw !important;
        // height: 2.1875vw !important;
        background: url(/src/assets/img/change1.png) !important;
        background-size: 100% 100% !important;
    }
    .change2 {
        background: url('@/assets/img/change2.png') !important;
        background-size: 100% 100% !important;
    }
    .left {
        display: flex;
        img {
            width: 32px;
            height: 32px;
            margin-right: 12px;
        }
        .time {
            font-family: DINAlternate-Bold;
            font-weight: Bold;
            font-size: 16px;
            color: #ffffff;
            margin-right: 24px;
        }
        .menu1 {
            width: 196px;
            height: 42px;
            background: url('@/assets/img/menu1.png');
            font-size: 20px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
    .right {
        display: flex;
        .menu2 {
            width: 196px;
            height: 42px;
            background: url('@/assets/img/menu2.png');
            font-size: 20px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .work {
            width: 72px;
            height: 32px;
            box-shadow: inset 0 0 50px 0 rgba(56, 155, 255, 0.5);
            border-radius: 16px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 24px;
        }
        .headPortrait {
            width: 40px;
            height: 40px;
            background: #fff;
            margin-left: 18px;
            border-radius: 30px;
        }
    }
}
</style>
