<template>
    <div class="Center">
        <div class="tabs">
            <div class="tab-item" @click="changeTab(1)">
                <div class="text" :class="{ clickTab: currtIndex == 1 }">统战能力指数</div>
            </div>
            <div class="tab-item1" @click="changeTab(2)">
                <div class="text" :class="{ clickTab: currtIndex == 2 }">数字统战核心指标</div>
            </div>
        </div>

        <div v-show="currtIndex == 1" class="tab1-box">
            <div class="content" @click="showdialog = false">
                <div class="map">
                    <div
                        @click.stop="changeRank(item, index + 1)"
                        class="rankCard"
                        :class="[`rankCard${index + 1}`, `ps${index + 1}`]"
                        v-for="(item, index) in itemList"
                    >
                        <div class="rankCard-box">
                            <div class="rank">no.{{ index + 1 }}</div>
                            <div class="info">
                                <span class="name">{{ item.name }}</span
                                ><span class="value">{{ item.value }}</span>
                            </div>
                        </div>
                        <div v-if="showdialog && index + 1 === dialogData.rank" class="rankDialog">
                            <div class="left">
                                <div class="rank">
                                    <span class="name">{{ dialogData.name }}</span
                                    ><span class="value">no.{{ dialogData.rank }}</span>
                                </div>
                                <div class="dialog-content">
                                    <div class="name">重大任务执行力</div>
                                    <div class="value">0</div>
                                </div>
                                <div class="dialog-content">
                                    <div class="name">全过程人民民主 实践参与度</div>
                                    <div class="value">0</div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="dialog-content-one">
                                    <div class="name">统战能力指数</div>
                                    <div class="value">{{ dialogData.value }}</div>
                                </div>
                                <div class="dialog-content">
                                    <div class="name">重大风险管控力</div>
                                    <div class="value">0</div>
                                </div>
                                <div class="dialog-content">
                                    <div class="name">党外代表人士队伍 现代化新能力</div>
                                    <div class="value">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footerTabs">
                <div class="tab-item"><span class="name">统战人物</span><span class="value">326,322</span></div>
                <div class="tab-item"><span class="name">统战组织</span><span class="value">4,760</span></div>
                <div class="tab-item"><span class="name">统战场所</span><span class="value">928</span></div>
            </div>
        </div>
        <div v-show="currtIndex == 2" class="tab2-box">
            <div class="titles">
                <div class="title-item">
                    <div class="head">数据仓数据归集量</div>
                    <div class="content"><span class="value">1.0</span><span class="unit">亿</span></div>
                </div>
                <div class="title-item">
                    <div class="head">用户数</div>
                    <div class="content"><span class="value">2048</span><span class="unit">人</span></div>
                </div>
                <div class="title-item">
                    <div class="head">活跃度</div>
                    <div class="content"><span class="value">65</span><span class="unit">%</span></div>
                </div>
                <div class="title-item">
                    <div class="head">核心业务覆盖率</div>
                    <div class="content"><span class="value">80</span><span class="unit">%</span></div>
                </div>
                <div class="title-item">
                    <div class="head">内网端口覆盖率</div>
                    <div class="content"><span class="value">100</span><span class="unit">%</span></div>
                </div>
            </div>
            <div class="info-content">
                <div class="left">
                    <div class="head">
                        <div class="title">
                            <el-icon><CaretRight class="CaretRight" /> </el-icon><span>重大应用月活跃度</span>
                        </div>
                        <div class="date">
                            <div @click="dateIndex = 1" :class="{ dateChange: dateIndex == 1 }">周</div>
                            <div @click="dateIndex = 2" :class="{ dateChange: dateIndex == 2 }">月</div>
                            <div @click="dateIndex = 3" :class="{ dateChange: dateIndex == 3 }">年</div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <img src="@/assets/img/month1.png" alt="" />
                            <div class="info">
                                <div class="title"><span>浙里宗教智治</span><span class="value">999</span></div>
                                <div class="rank-box">
                                    <div class="rank">
                                        ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜

                                        <!-- <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <img src="@/assets/img/month2.png" alt="" />
                            <div class="info">
                                <div class="title"><span>浙里民族团结石榴红</span><span class="value">888</span></div>
                                <div class="rank-box">
                                    <div class="rank">
                                        ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜

                                        <!-- <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <img src="@/assets/img/month3.png" alt="" />
                            <div class="info">
                                <div class="title"><span>浙里数智议政</span><span class="value">777</span></div>
                                <div class="rank-box">
                                    <div class="rank">
                                        ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜

                                        <!-- <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <img src="@/assets/img/month4.png" alt="" />
                            <div class="info">
                                <div class="title"><span>浙里数智党派</span><span class="value">666</span></div>
                                <div class="rank-box">
                                    <div class="rank">
                                        ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜

                                        <!-- <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <img src="@/assets/img/month5.png" alt="" />
                            <div class="info">
                                <div class="title"><span>浙里为侨服务“全球通”</span><span class="value">555</span></div>
                                <div class="rank-box">
                                    <div class="rank">
                                        ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜

                                        <!-- <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <img src="@/assets/img/month6.png" alt="" />
                            <div class="info">
                                <div class="title"><span>全链条</span><span class="value">444</span></div>
                                <div class="rank-box">
                                    <div class="rank">
                                        ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜

                                        <!-- <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <img src="@/assets/img/month7.png" alt="" />
                            <div class="info">
                                <div class="title"><span>浙里宗教智治</span><span class="value">333</span></div>
                                <div class="rank-box">
                                    <div class="rank">
                                        ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜
                                        <!-- <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div>
                  <div class="party"></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="right-1-box">
                        <div class="head">
                            <div class="title">
                                <el-icon><CaretRight class="CaretRight" /> </el-icon><span>重大应用上线运行率</span>
                            </div>
                        </div>
                        <div class="charts-box">
                            <div class="charts" ref="pie" id="pie"></div>
                            <div class="icon-box">
                                <div class="icon1">
                                    <div class="info">
                                        <span class="value">75</span>
                                        <span class="name">已上线</span>
                                    </div>
                                </div>
                                <div class="icon2">
                                    <div class="info">
                                        <span class="name">总数</span>
                                        <span class="value">100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-2-box">
                        <div class="head">
                            <div class="title">
                                <i class="icon"></i><span>理论制度成果数</span><span class="value">10</span>
                            </div>
                        </div>
                        <div class="list">
                            <div
                                @mousemove="currentIndex = index"
                                :class="{ moveItem: currentIndex === index }"
                                class="item"
                                v-for="(item, index) in listData"
                                :key="index"
                            >
                                <span class="title">{{ item.name }}</span>
                                <span class="info">{{ item.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import $store from '@/store';
import { useRouter } from 'vue-router';
import * as echarts from 'echarts';
const router = useRouter();
const emit = defineEmits(['close']);
const props = defineProps({});
const {} = props;
const test = computed(() => {
    return null;
});
let currtIndex = ref(1);
let dateIndex = ref(1);
let itemList = ref([
    {
        name: '杭州市',
        value: '124',
    },
    {
        name: '宁波市',
        value: '120',
    },
    {
        name: '金华市',
        value: '118',
    },
    {
        name: '湖州市',
        value: '106',
    },
    {
        name: '温州市',
        value: '98',
    },
    {
        name: '嘉兴市',
        value: '92',
    },

    {
        name: '绍兴市',
        value: '88',
    },
    {
        name: '衢州市',
        value: '82',
    },
    {
        name: '舟山市',
        value: '78',
    },
    {
        name: '台州市',
        value: '76',
    },
    {
        name: '丽水市',
        value: '71',
    },
]);
let showdialog = ref(false);
let pie = ref(null);
let chart = ref(null);
let chartDom = ref(null);
let pieData = ref([
    { value: 750, name: 'Search Engine' },
    { value: 250, name: 'Direct' },
]);
let currentIndex = ref(0);
let listData = ref([
    {
        name: '分类',
        text: '标题',
    },
    {
        name: '理论',
        text: '关于统一战线某某某某某某某某某理论',
    },
    {
        name: '理论',
        text: '关于统一战线某某某某某某理论',
    },
    {
        name: '制度',
        text: '关于统一战线某某某某某某理论',
    },
    {
        name: '规范',
        text: '关于统一战线某某某某某某理论',
    },
    {
        name: '标准',
        text: '关于统一战线某某某某某某理论',
    },
]);

let dialogData = ref({
    name: '',
    rank: 0,
    value: '',
});
function changeRank(row, index) {
    dialogData.value = {
        name: row.name,
        rank: index,
        value: row.value,
    };
    showdialog.value = true;
}
function changeTab(val) {
    console.log(val);
    currtIndex.value = val;
    showdialog.value = false;
}
// 初始化饼图
function initCharts() {
    chartDom = document.getElementById('pie');
    chart = echarts.init(chartDom);
    // --------------------给饼图设置渐变颜色--------------------------
    // let colorMap = {
    //     烟雾数: new $echarts.graphic.LinearGradient(0, 0, 1, 1, [
    //         { offset: 0, color: '#F77392' },
    //         { offset: 1, color: '#EC3F59' },
    //     ]),
    //     燃气数: new $echarts.graphic.LinearGradient(0, 0, 1, 1, [
    //         { offset: 0, color: '#F8DC77' },
    //         { offset: 1, color: '#E5981D' },
    //     ]),
    //     电力数: new $echarts.graphic.LinearGradient(0, 0, 1, 1, [
    //         { offset: 0, color: '#56BFFD' },
    //         { offset: 1, color: '#2B8BF9' },
    //     ]),
    //     其他: new $echarts.graphic.LinearGradient(0, 0, 1, 1, [
    //         { offset: 0, color: '#53DEC4' },
    //         { offset: 1, color: '#29BA91' },
    //     ]),
    // };
    // let color = pieData.map(e => {
    //     console.log(colorMap[e.name]);
    //     return colorMap[e.name];
    // });

    chart.setOption({
        // color: ['#1DE638', ''],
        //         title: [
        //             {
        //                 show: true,
        //                 text: `  ${(pieData.value[0].value / (pieData.value[0].value + pieData.value[1].value)) * 100}%`,
        //                 subtext: ``,
        //                 x: 'center',
        //                 y: '26%',
        //                 textStyle: {
        //                     fontSize: 26,
        //                     color: '#1DE638',
        //                     fontWeight: 400,
        //                 },
        //                 subtextStyle: {
        //                     color: '#fff',
        //                     fontSize: 12,
        //                 },
        //                 // top: '26%',
        //                 // // right: '50%',
        //                 // // bottom: '5%',
        //                 // left: '25%',
        //             },
        //             {
        //                 x: 'center',
        //                 y: 'center',
        //                 show: true,
        //                 text: `重大应用上

        //  线运行率`,
        //                 subtext: ``,
        //                 textStyle: {
        //                     fontSize: 12,
        //                     color: '#1DE638',
        //                     fontWeight: 400,
        //                 },
        //                 subtextStyle: {
        //                     color: '#fff',
        //                     fontSize: 12,
        //                 },
        //                 // // textAlign:'right'
        //                 // top: '45%',
        //                 // // right: '50%',
        //                 // // bottom: '5%',
        //                 // left: '32%',
        //             },
        //         ],
        title: {
            text: `${(pieData.value[0].value / (pieData.value[0].value + pieData.value[1].value)) * 100}%`,
            // 副标题
            subtext: `重大应用上

线运行率`,
            // 主副标题间距
            itemGap: 10,
            x: 'center',
            y: 'center',
            top: '30%',
            // 主标题样式
            textStyle: {
                fontSize: '26',
                color: '#1DE638',
            },
            // 副标题样式
            subtextStyle: {
                fontSize: '16',
                fontWeight: '400',
                color: '#fff',
            },
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            show: false,
            top: '5%',
            right: '5%',
            bottom: '5%',
            left: '5%',
            orient: 'horizontal', //图例列表的布局朝向。horizontal横排,vertical竖排
            icon: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            fontSize: '12',
            // formatter: '{a|ihohi}',
            formatter: (val) => {
                return val;
            },
            textStyle: {},
        },
        series: [
            {
                color: ['#1DE638', 'rgb(255,255,255,0)'],
                // name: '访问来源',
                type: 'pie',
                //调整圆角
                radius: ['65%', '80%'],
                silent: 'ture',
                //调整位置
                center: ['50%', '50%'],
                //图表文字显示
                label: {
                    show: false,
                    position: 'center', //outside饼图扇区外侧，通过视觉引导线连到相应的扇区inside饼图扇区内部center在饼图中心位置。
                    formatter: (val) => {
                        return val.value;
                    },
                },
                //鼠标移动上去显示标题,标题的内容根据label的formatter显示
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '19',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: pieData.value,
                left: '0%',
                // right: '5%',
            },
            {
                color: ['#1DE638'],
                // name: '访问来源',
                type: 'pie',
                //调整圆角
                radius: ['89%', '90%'],
                silent: 'ture',
                //调整位置
                // center: ['26%', '10%'],
                //图表文字显示
                label: {
                    show: false,
                    position: 'center', //outside饼图扇区外侧，通过视觉引导线连到相应的扇区inside饼图扇区内部center在饼图中心位置。
                    formatter: (val) => {
                        return val.value;
                    },
                },
                //鼠标移动上去显示标题,标题的内容根据label的formatter显示
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '19',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [{ value: 750, name: 'Search Engine' }],
                left: '0%',
                // right: '5%',
            },
        ],
    });
}
function resizeFun() {
    const titleFontSize = chartDom.offsetWidth / 6.5;
    const subtextFontSize = chartDom.offsetWidth / 12.07;
    let updataOption = {
        title: {
            textStyle: {
                fontSize: titleFontSize,
            },
            subtextStyle: {
                // color: '#fff',
                fontSize: subtextFontSize,
            },
            tooltip: {
                axisPointer: {
                    lineStyle: {
                        width: titleFontSize,
                    },
                },
            },
        },
    };
    chart.setOption(updataOption);
    chart.resize();
}

watch(() => {});
onMounted(() => {
    initCharts();
    // resizeFun();
    window.addEventListener('resize', () => {
        resizeFun();
    });
});
onUnmounted(() => {});
</script>
<style lang="less" scoped>
.Center {
    .tabs {
        display: flex;
        justify-content: center;
        .clickTab {
            border-bottom: 2px solid #1fffff;
            color: #1fffff;
        }
        > div {
            height: 54px;
            width: 230px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: YouSheBiaoTiHei;
            font-size: 22px;
            color: #fff;
            letter-spacing: 0.29px;
            cursor: pointer;
            background-size: 100% 100%;
            .text {
                padding-bottom: 6px;
                box-sizing: border-box;
            }
        }
        .tab-item {
            background: url('@/assets/img/编组 7.png') no-repeat;
            margin-right: 12px;
        }
        .tab-item1 {
            background: url('@/assets/img/编组 6.png') no-repeat;
        }
    }
    .tab1-box {
        .content {
            display: flex;
            justify-content: center;
            margin-top: 46px;
            .map {
                background: url('@/assets/img/map.png');
                background-size: 100% 100%;
                width: 737.3px;
                height: 630px;
                position: relative;
                .rankCard {
                    width: 88px;
                    height: 42px;
                    background: url('@/assets/img/rank.png');
                    cursor: pointer;
                    position: relative;
                    position: absolute;
                    color: #fff;
                    .rankCard-box {
                        padding: 0 4px;
                        box-sizing: border-box;
                    }
                    .rankDialog {
                        position: absolute;
                        padding: 20px 12px 0 20px;
                        box-sizing: border-box;
                        width: 311px;
                        height: 211px;
                        background: url('@/assets/img/弹出框-2.png');
                        background-size: 100% 100%;
                        right: 100px;
                        bottom: 10px;
                        display: flex;
                        justify-content: space-between;
                        z-index: 999;
                        // transform: scaleX(-1);
                        .left {
                            .rank {
                                min-width: 112px;
                                .name {
                                    font-family: YouSheBiaoTiHei;
                                    font-size: 20px;
                                    color: #cff0ff;
                                    margin-right: 7px;
                                }
                                .value {
                                    font-family: YouSheBiaoTiHei;
                                    font-size: 20px;
                                    color: #ffbf5a;
                                }
                            }
                        }
                        .dialog-content-one {
                            color: #cff0ff;
                            display: flex;
                            align-items: center;
                            .name {
                                max-width: 128px;
                                margin-right: 10px;
                                font-size: 16px;
                            }
                            .value {
                                font-family: DINAlternate-Bold;
                                font-weight: Bold;
                                font-size: 20px;
                                color: #cff0ff;
                            }
                        }
                        .dialog-content {
                            color: #cff0ff;
                            text-align: center;
                            margin-top: 12px;
                            .name {
                                max-width: 128px;
                                font-size: 16px;
                            }
                            .value {
                                margin-top: 6px;
                            }
                        }
                    }
                }
                .rankCard1 {
                    width: 88px;
                    height: 42px;
                    background: url('@/assets/img/rank1.png');
                    position: absolute;
                    color: #ab2323;
                }
                .rankCard2 {
                    width: 88px;
                    height: 42px;
                    background: url('@/assets/img/rank2.png');
                    position: absolute;
                }
                .rankCard3 {
                    width: 88px;
                    height: 42px;
                    background: url('@/assets/img/rank3.png');
                    position: absolute;
                    color: #6affff;
                }
                .ps1 {
                    left: 240px;
                    top: 148px;
                }
                .ps2 {
                    left: 536px;
                    top: 188px;
                }
                .ps3 {
                    left: 267px;
                    top: 288px;
                }
                .ps4 {
                    left: 280px;
                    top: 36px;
                }
                .ps5 {
                    left: 418px;
                    top: 453px;
                }
                .ps6 {
                    left: 417px;
                    top: 50px;
                }
                .ps7 {
                    left: 384px;
                    top: 190px;
                }
                .ps8 {
                    left: 100px;
                    top: 306px;
                }
                .ps9 {
                    left: 644px;
                    top: 114px;
                }
                .ps10 {
                    left: 471px;
                    top: 320px;
                }
                .ps11 {
                    left: 196px;
                    top: 415px;
                }
                .rank {
                    font-family: YouSheBiaoTiHei;
                    font-size: 16px;
                }
                .info {
                    display: flex;
                    justify-content: space-between;

                    .name {
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        font-size: 14px;
                    }
                    .value {
                        font-family: DINAlternate-Bold;
                        font-weight: Bold;
                        font-size: 16px;
                    }
                }
            }
        }
        .footerTabs {
            display: flex;
            justify-content: center;
            margin-top: 16px;
            .tab-item {
                width: 273px;
                height: 44px;
                margin-right: 20px;
                background: url('@/assets/img/编组 24.png');
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                .name {
                    margin-right: 16px;
                    font-family: PingFangSC-Medium;
                    font-weight: 500;
                    font-size: 20px;
                    letter-spacing: 0;
                    text-shadow: 0 2px 4px rgba(96, 201, 255, 0.5);
                }
                .value {
                    font-family: DINAlternate-Bold;
                    font-weight: 500;
                    font-size: 24px;
                    color: #ffffff;
                    letter-spacing: 0;
                    text-shadow: 0 2px 4px rgba(96, 201, 255, 0.5);
                }
            }
        }
    }
    .tab2-box {
        padding: 0 58px;
        box-sizing: border-box;
        .CaretRight {
            color: #fff;
        }
        .titles {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            .title-item {
                width: 180px;
                height: 100px;
                background: url('@/assets/img/矩形 (2).png');
                padding: 13px 0 0 8px;
                box-sizing: border-box;
                .head {
                    width: 164px;
                    height: 32px;
                    background: url('@/assets/img/编组 11.png');
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: YouSheBiaoTiHei;
                    font-size: 20px;
                    color: #ffffff;
                    letter-spacing: 1.25px;
                }
                .content {
                    margin-top: 6px;
                    margin-left: 20px;
                    .value {
                        font-family: DINAlternate-Bold;
                        font-weight: Bold;
                        font-size: 26px;
                        color: #ffbd36;
                        letter-spacing: 0;
                        margin-right: 10px;
                    }
                    .unit {
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        font-size: 14px;
                        color: rgba(255, 255, 255, 0.8);
                        letter-spacing: 0.88px;
                    }
                }
            }
        }
        .info-content {
            display: flex;
            .head {
                margin-top: 32px;
                display: flex;
                justify-content: space-between;
                .title {
                    display: flex;
                    align-items: center;
                    font-family: YouSheBiaoTiHei;
                    font-size: 20px;
                    color: #cff0ff;
                    letter-spacing: 0;
                    text-shadow: 0 2px 4px rgba(163, 152, 226, 0.3);
                    span {
                        margin-left: 8px;
                    }
                }
                .date {
                    display: flex;
                    color: #fff;
                    div {
                        font-size: 16px;
                        width: 30px;
                        height: 16px;
                        line-height: 16px;
                        margin-left: 16px;
                        box-sizing: border-box;
                        cursor: pointer;
                    }
                    .dateChange {
                        color: #1fffff;
                    }
                }
                .date div:not(:last-child) {
                    border-right: 1px solid #fff;
                }
            }
            .left {
                width: 400px;
                .list {
                    .item {
                        margin-top: 24px;
                        display: flex;
                        img {
                            width: 52px;
                            height: 52px;
                        }
                        .info {
                            margin-left: 6px;
                            .title {
                                padding: 5px 14px 5px 7px;
                                box-sizing: border-box;
                                width: 332px;
                                height: 32px;
                                // opacity: 0.6;
                                background-image: linear-gradient(90deg, #3a5e88 1%, #234067 60%);
                                display: flex;
                                justify-content: space-between;
                                span {
                                    font-family: PingFangSC-Regular;
                                    font-weight: 400;
                                    font-size: 16px;
                                    color: #fff;
                                }
                                .value {
                                    font-family: DINAlternate-Bold;
                                    font-weight: Bold;
                                    font-size: 18px;
                                    color: #ffffff;
                                }
                            }
                            .rank-box {
                                width: 332px;
                                height: 16px;
                                background: #112137;
                                margin-top: 4px;
                            }
                            .rank {
                                width: 500px;
                                height: 16px;
                                font-size: 12px;
                                -webkit-transform-origin-x: 0;
                                -webkit-transform: scale(0.66, 0.66);
                                // background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
                                // margin-top: 4px;
                                padding-left: 4px;
                                // box-sizing: border-box;
                                // display: flex;
                                background: linear-gradient(to right, rgba(255, 159, 67, 0.1), #fdc85c);
                                // background: #ff9f43;

                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                white-space: nowrap;
                                .party {
                                    width: 8px;
                                    height: 8px;
                                    background: #ff9f43;
                                    margin-right: 4px;
                                }
                            }
                        }
                    }
                }
                .list .item:first-child {
                    margin-top: 24px;
                }
            }
            .right {
                padding-left: 88px;
                box-sizing: border-box;
                .charts-box {
                    width: 438px;
                    height: 160px;
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .charts {
                        width: 200px;
                        height: 200px;
                    }
                    .icon-box {
                        margin-left: 55px;
                        .icon1 {
                            width: 214px;
                            height: 60px;
                            background: url('@/assets/img/待完成.png');
                            background-size: 100% 100%;

                            .info {
                                text-align: right;
                                padding-right: 16px;
                                box-sizing: border-box;
                                line-height: 50px;
                                .value {
                                    font-family: DINAlternate-Bold;
                                    font-weight: Bold;
                                    font-size: 24px;
                                    color: #1de638;
                                    letter-spacing: 0;
                                    margin-right: 16px;
                                }
                                .name {
                                    font-family: PingFangSC-Regular;
                                    font-weight: 400;
                                    font-size: 14px;
                                    color: #cccccc;
                                    letter-spacing: 0;
                                }
                            }
                        }
                        .icon2 {
                            width: 214px;
                            height: 60px;
                            background: url('@/assets/img/已完成.png');
                            background-size: 100% 100%;
                            .info {
                                text-align: left;
                                padding-left: 16px;
                                box-sizing: border-box;
                                line-height: 65px;
                                .value {
                                    font-family: DINAlternate-Bold;
                                    font-weight: Bold;
                                    font-size: 24px;
                                    color: #3fa6ff;
                                    letter-spacing: 0;
                                    margin-left: 16px;
                                }
                                .name {
                                    font-family: PingFangSC-Regular;
                                    font-weight: 400;
                                    font-size: 14px;
                                    color: #cccccc;
                                    letter-spacing: 0;
                                }
                            }
                        }
                    }
                }
                .right-2-box {
                    margin-top: 24px;
                    .head {
                        .icon {
                            display: inline-block;
                            width: 32px;
                            height: 32px;
                            background: url('@/assets/img/编组 7 (1).png');
                            background-size: 100% 100%;
                        }
                        .value {
                            font-family: DINAlternate-Bold;
                            font-weight: Bold;
                            font-size: 28px;
                            color: #ffb94b;
                            margin-left: 44px;
                        }
                    }
                    .list {
                        margin-top: 20px;
                        .item {
                            width: 430px;
                            height: 40px;
                            padding: 10px 23px;
                            box-sizing: border-box;
                            background: rgba(255, 255, 255, 0.1);
                            margin-top: 8px;
                            cursor: pointer;
                        }
                        .moveItem {
                            width: 430px;
                            height: 40px;
                            background-image: linear-gradient(
                                180deg,
                                rgba(20, 146, 255, 0.3) 0%,
                                rgba(20, 146, 255, 0.01) 52%,
                                rgba(20, 146, 255, 0.3) 100%
                            );
                        }
                        .title {
                            font-family: PingFangSC-Regular;
                            font-weight: 400;
                            font-size: 14px;
                            color: #ffffff;
                            letter-spacing: 0;
                            margin-right: 76px;
                        }
                        .info {
                            font-family: PingFangSC-Medium;
                            font-weight: 500;
                            font-size: 14px;
                            color: #ffffff;
                            letter-spacing: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
