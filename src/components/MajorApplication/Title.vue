<template>
  <div class="title" >
    <el-icon><CaretRight class="CaretRight" /> </el-icon>
    <div class="text">{{ titleName }}</div>
    <div class="icon"><img src="@/assets/img/electronics.png" alt="" /> 系统直达</div>
  </div>
</template>
<script setup>
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
    default: 1,
  },
});
const { titleName } = props;
const test = computed(() => {
  return null;
});
watch(() => {});
onMounted(() => {});
onUnmounted(() => {});
</script>
<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .CaretRight {
    color: #fff;
    // display: flex;
    // align-items: center;
    // height: 100%;
  }
  .text {
    width: 250px;
    // height: 37.33px;
    font-family: YouSheBiaoTiHei;
    font-size: 24px;
    color: #cff0ff;
    letter-spacing: 0;
    text-shadow: 0 2px 4px rgba(163, 152, 226, 0.3);
    margin-right: 8px;
  }
  .icon {
    width: 100px;
    height: 24px;
    background: rgba(20, 146, 255, 0.01);
    border: 1px solid #c7d6e2;
    border-radius: 2px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c7d6e2;
    img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
