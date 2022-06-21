<template>
    <div class="collaborativeOffice">
        <div class="bg-left"></div>
        <div class="content">
            <div class="content-title">协同办公</div>
            <div class="content-img">
                <div class="img-box img-top">
                    <div class="img"><img src="@/assets/img/编组 5备份 9.png" alt="" /></div>
                    <div class="img"><img src="@/assets/img/编组 5备份 10.png" alt="" /></div>
                    <div class="img"><img src="@/assets/img/编组 5备份 11.png" alt="" /></div>
                    <div class="img"><img src="@/assets/img/编组 5备份 12.png" alt="" /></div>
                    <div class="img"><img src="@/assets/img/编组 5备份 13.png" alt="" /></div>
                </div>
                <div class="img-box img-bottom">
                    <div class="img"><img src="@/assets/img/编组 5备份 14.png" alt="" /></div>
                    <div class="img"><img src="@/assets/img/编组 5备份 15.png" alt="" /></div>
                    <div class="img"><img src="@/assets/img/编组 5备份 16.png" alt="" /></div>
                    <div class="img"><img src="@/assets/img/编组 5备份 17.png" alt="" /></div>
                    <div class="img"><img src="@/assets/img/编组 5备份 18.png" alt="" /></div>
                </div>
            </div>
        </div>
        <div class="bg-right"></div>
    </div>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import $store from '@/store';
import { useRouter } from 'vue-router';
const router = useRouter();
const emit = defineEmits(['close']);
const props = defineProps({});

const test = computed(() => {
    return null;
});
watch(() => {});
onMounted(() => {});
onUnmounted(() => {});
</script>
<style lang="less" scoped>
.collaborativeOffice {
    height: 100%;
    display: flex;
    padding: 14px 0px 20px 0;
    box-sizing: border-box;
    // justify-content: space-between;
    .content {
        width: 1386px;
        margin: 47px 0 56px 0;
        padding: 0 35px;
        background: rgba(10, 24, 87, 0.2);
        box-shadow: 12px 12px 32px 0 rgba(22, 81, 154, 0.3), -12px -12px 32px 0 rgba(22, 81, 154, 0.3);
        border-radius: 20px;
        box-sizing: border-box;
        .content-title {
            font-family: YouSheBiaoTiHei;
            font-size: 52px;
            color: #d6f2ff;
            text-align: center;
            margin: 60px 0;
        }
        .content-img {
            box-sizing: border-box;
            .img-box {
                display: flex;
                .img {
                    width: 219px;
                    height: 180px;
                    flex: 1;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }

        // &::before {
        //     content: '';
        //     height: 100%;
        //     width: 428px;
        //     background: url('@/assets/img/矩形备份 8.png') no-repeat;
        //     background-size: 100% 100%;
        // }
    }
    .bg-left {
        height: 100%;
        width: 428px;
        background: url('@/assets/img/矩形备份 8.png') no-repeat;
        background-size: 100% 100%;
    }
    .bg-right {
        height: 100%;
        width: 428px;
        background: url('@/assets/img/矩形备份 8(1).png') no-repeat;
        background-size: 100% 100%;
    }
}
</style>
