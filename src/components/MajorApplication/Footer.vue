<template>
  <div class="Footer">
    <!-- <div class="list">
      <div class="item">杭州市</div>
      <div class="item">宁波市</div>
      <div class="item">温州市</div>
      <div class="item">嘉兴市</div>
      <div class="item">湖州市</div>
      <div class="item">绍兴市</div>
      <div class="item">金华市</div>
      <div class="item">衢州市</div>
      <div class="item">舟山市</div>
      <div class="item">台州市</div>
      <div class="item">丽水市</div>
    </div> -->
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
const {} = props;
const test = computed(() => {
  return null;
});
watch(() => {});
onMounted(() => {});
onUnmounted(() => {});
</script>
<style lang="less" scoped>
.Footer {
  // margin-top: 34px;
  background: url("@/assets/img/底部切换.png") no-repeat;
  background-size: 100% 100%;
  height: 63px;
  // width: 1920;
  .list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 76px;
    background-image: linear-gradient(
      88deg,
      rgba(68, 151, 247, 0) 7%,
      rgba(68, 151, 247, 0.44) 51%,
      rgba(68, 151, 247, 0) 93%
    );
    .item {
      width: 139px;
      height: 38.11px;
      background: url('@/assets/img/运营总览.png') no-repeat;
      background-size: 100% 100%;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      font-size: 18px;
      color: #ffffff;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
