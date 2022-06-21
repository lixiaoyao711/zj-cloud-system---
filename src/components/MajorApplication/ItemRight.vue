<template>
    <div class="Item" :style="{ transform: `rotate(${deg}deg)` }">
        <Title :titleName="titleName" :deg="deg" />
        <div class="item">
            <!-- <div src="@/assets/img/编组 22.png" alt="" /> -->
            <div class="img1"></div>
            <div class="data">
                <div class="value">
                    <span class="number">14,567</span><span class="upIcon"></span><span class="scaleUp">20%</span>
                </div>
                <div class="text"><span class="name">日活用户数</span><span class="scale">环比</span></div>
            </div>
        </div>
        <div class="item">
            <!-- <img src="@/assets/img/编组 23.png" alt="" /> -->
            <div class="img2"></div>
            <div class="data">
                <div class="value">
                    <span class="number">14,567</span><span class="downIcon"></span> <span class="scaleDown">13%</span>
                </div>
                <div class="text"><span class="name2">月数据归集量</span><span class="scale">环比</span></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Title from '@/components/MajorApplication/Title';

import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import $store from '@/store';
import { useRouter } from 'vue-router';
const router = useRouter();
const emit = defineEmits(['close']);
const props = defineProps({
    titleName: String,
    deg: {
        Type: Number,
        default: -2.5,
    },
});
const {} = props;
const test = computed(() => {
    return null;
});
watch(() => {});
onMounted(() => {});
onUnmounted(() => {});
</script>
<style lang="less" scoped>
.Item {
    padding-bottom: 12px;
    box-sizing: border-box;
    .item {
        display: flex;
        align-items: center;
        margin-top: 20px;
        .img1 {
            width: 76px;
            height: 60px;
            background: url('@/assets/img/编组 22.png') no-repeat;
            background-size: 100%;
        }
        .img2 {
            width: 76px;
            height: 60px;
            background: url('@/assets/img/编组 23.png') no-repeat;
            background-size: 100%;
        }
        .data {
            margin-left: 22px;
            .upIcon {
                background: url('@/assets/img/up.png');
                width: 12px;
                height: 12px;
                margin-right: 2px;
            }
            .downIcon {
                background: url('@/assets/img/down.png');
                width: 12px;
                height: 12px;
                margin-right: 2px;
            }
            .scaleUp {
                width: 31px;
                height: 20px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                font-size: 14px;
                color: #ff4040;
                letter-spacing: 0;
            }
            .scaleDown {
                width: 31px;
                height: 20px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                font-size: 14px;
                color: #35ed4e;
                letter-spacing: 0;
            }
            .value {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .number {
                    width: 103.05px;
                    height: 24px;
                    font-family: DINAlternate-Bold;
                    font-weight: Bold;
                    font-size: 20px;
                    color: #ffffff;
                    letter-spacing: 0;
                    text-shadow: 0 1px 3px rgba(20, 146, 255, 0.45);
                }
            }
            .text {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 8px;
                .name {
                    width: 110.06px;
                    height: 13px;
                    font-family: SourceHanSansCN-Regular;
                    font-weight: 400;
                    font-size: 12.86px;
                    color: #ffffff;
                    letter-spacing: 0;
                    text-shadow: 0 1px 3px rgba(12, 209, 149, 0.6);
                }
                .name2 {
                    width: 110.06px;
                    height: 13px;
                    font-family: SourceHanSansCN-Regular;
                    font-weight: 400;
                    font-size: 12.86px;
                    color: #ffffff;
                    letter-spacing: 0;
                    text-shadow: 0 1px 3px rgba(227, 183, 13, 0.6);
                }
                .scale {
                    // width: 26px;
                    height: 13px;
                    font-family: SourceHanSansCN-Regular;
                    font-weight: 400;
                    font-size: 12.86px;
                    color: #ffffff;
                    letter-spacing: 0;
                }
            }
        }
    }
}
</style>
