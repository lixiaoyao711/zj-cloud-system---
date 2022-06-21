<template>
    <div class="Home">
        <Header />
        <div class="router">
            <router-view v-slot="{ Component }">
                <keep-alive><component class="view" :is="Component" /></keep-alive>
            </router-view>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import Header from '@/components/header';
import { formatDateTime } from '@/utils/common';
import axios from 'axios';
import $store from '@/store';
import { useRouter } from 'vue-router';
let newYear = ref(new Date());
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
</script>
<style lang="less" scoped>
.Home {
    width: 100%;
    height: 100%;
    background: url('@/assets/img/bg.png') no-repeat;
    background-size: 100% 100%;
    // background: url('@/assets/img/背景.png');
}

.router {
    height: calc(100vh - 89px);
    flex: 1;
    padding: 0px 24px;
    // box-sizing: border-box;
    overflow-y: auto;
}
</style>
