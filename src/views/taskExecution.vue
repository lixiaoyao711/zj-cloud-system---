<template>
    <div class="taskExecution">
        <div class="bg-left">
            <div class="head"><span>重大任务</span></div>
            <div class="main">
                <div class="active">
                    <div class="active-tab" :class="active ? 'actives' : ''" @click="active = 1">成员单位</div>
                    <div class="active-tab" :class="active ? '' : 'actives'" @click="active = 0">设区市党委</div>
                </div>
                <div class="list">
                    <div
                        class="task"
                        :class="taskActive == index ? 'taskActive' : ''"
                        v-for="(item, index) in taskList"
                        :key="index"
                        @click="taskActive = index"
                    >
                        <div class="icon"><div></div></div>
                        <div class="task-name">{{ item.name }}</div>
                        <div class="task-tag">执行率：{{ item.tag }}</div>
                    </div>
                </div>
            </div>
            <div class="foot"><div>填报系统</div></div>
        </div>
        <div class="content">
            <div class="group">
                <div class="box">
                    <div><img src="@/assets/img/title-icon.png" alt="" /> 开展“千企千村”行动</div>
                    <div id="pieCharts" class="high"></div>
                </div>
                <div class="box">
                    <div><img src="@/assets/img/title-icon.png" alt="" /> 新增资金</div>
                    <div class="xzzj_box">
                        <div class="xzzj_box-title">
                            <span>· 单位：（万元）</span><span>计划数＞1000 实际数：1059</span>
                        </div>
                        <div id="xzzj_bar" class="high"></div>
                        <div class="xzzj_title">
                            <div class="item">
                                <i class="icon"></i> <span class="name">第一季度</span> <span class="value">266</span>
                            </div>
                            <div class="item">
                                <i class="icon"></i> <span class="name">第二季度</span> <span class="value">72</span>
                            </div>
                            <div class="item">
                                <i class="icon"></i> <span class="name">第三季度</span> <span class="value">100</span>
                            </div>
                            <div class="item">
                                <i class="icon"></i> <span class="name">第四季度</span> <span class="value">567</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="box">
                    <div><img src="@/assets/img/title-icon.png" alt="" /> 招引新乡贤回乡</div>
                    <div id="jczy_bar" class="high"></div>
                </div>
                <div class="box">
                    <div><img src="@/assets/img/title-icon.png" alt="" /> 举办”亲清直通车 · 政企恳谈会“</div>
                    <div id="linchars1" class="high"></div>
                </div>
            </div>
            <div class="group">
                <div class="box">
                    <div><img src="@/assets/img/title-icon.png" alt="" /> 宣传教育活动-季度累计</div>
                    <div id="jdlj_bar" class="high"></div>
                </div>
                <div class="box">
                    <div><img src="@/assets/img/title-icon.png" alt="" /> 同心共富实践基地建设数</div>
                    <div id="ringCharts" class="high"></div>
                </div>
            </div>
        </div>
        <div class="bg-right">
            <div class="unit">
                <div class="unit-name">牵头单位</div>
                <div class="unit-list">
                    <div class="unit-title">
                        <span>单位名称</span>
                        <span>任务数</span>
                        <span>统战能力指数</span>
                    </div>
                    <div class="units" v-for="(item, index) in leadList" :key="index">
                        <span>{{ item.name }}</span>
                        <span>{{ item.taskNum }}</span>
                        <span>{{ item.leadIndex }}</span>
                    </div>
                </div>
            </div>
            <div class="unit">
                <div class="unit-name">协同单位</div>
                <div class="unit-list">
                    <div class="unit-title">
                        <span>单位名称</span>
                        <span>任务数</span>
                        <span>统战能力指数</span>
                    </div>
                    <div class="units" v-for="(item, index) in collaborativeList" :key="index">
                        <span>{{ item.name }}</span>
                        <span>{{ item.taskNum }}</span>
                        <span>{{ item.leadIndex }}</span>
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
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
const router = useRouter();
const emit = defineEmits(['close']);
const props = defineProps({});

let active = ref(1);
let taskActive = ref(-1);
let taskList = ref([
    {
        name: '实施“同心共富”工程',
        tag: '4/6',
    },
    {
        name: '加强党外只是分子思想qqqq111',
        tag: '4/6',
    },
    {
        name: '实施“同心共富”工程',
        tag: '4/6',
    },
    {
        name: '加强党外只是分子思想qqqq',
        tag: '4/6',
    },
    {
        name: '实施“同心共富”工程',
        tag: '4/6',
    },
    {
        name: '加强党外只是分子思想qqqq',
        tag: '4/6',
    },
    {
        name: '实施“同心共富”工程',
        tag: '4/6',
    },
    {
        name: '加强党外只是分子思想qqqq',
        tag: '4/6',
    },
]);
let leadList = ref([
    {
        name: '省委统战部',
        taskNum: '15',
        leadIndex: '97',
    },
    {
        name: '省委组织部',
        taskNum: '10',
        leadIndex: '82',
    },
    {
        name: '省委宣传部',
        taskNum: '10',
        leadIndex: '89',
    },
]);
let collaborativeList = ref([
    {
        name: '省教育厅',
        taskNum: '15',
        leadIndex: '97',
    },
    {
        name: '省财政厅',
        taskNum: '10',
        leadIndex: '82',
    },
    {
        name: '省委办公厅',
        taskNum: '10',
        leadIndex: '89',
    },
]);

const test = computed(() => {
    return null;
});
function pieInit() {
    var chart = Highcharts.chart('pieCharts', {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
            plotBackgroundImage: 'img/pieBorder.png', //设置图表的背景图片
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0,
            },
            spacingTop: -40, //调整饼图在页面中的位置
        },
        label: {
            style: {
                fontWeight: 'normal',
                color: '#FFFFFF',
            },
        },
        title: {
            text: '· 民营企业结对村',
            align: 'left',
            x: -15,
            y: 60,
            style: {
                color: '#FFFFFF',
                fontWeight: 400,
                fontSize: 14,
            },
        },
        subtitle: {
            text: '计划数＞1000  实际数：1200',
            align: 'right',
            x: 0,
            y: 60,
            style: {
                color: '#FFFFFF',
                fontWeight: 400,
                fontSize: 14,
            },
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        slicedOffset: 10, //选中的时候有个滑动的效果
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 30,
                dataLabels: {
                    enabled: false,
                    format: '{point.name}',
                },
                center: ['50%', '45%'],
                size: '95%',
                startAngle: 230,
                showInLegend: true,
            },
        },
        credits: {
            enabled: false, //去掉右下角的"https://highcharts.com"的所有权
        },
        colors: ['#5B8EFF', '#C75C25', '#54D3A9'],
        legend: {
            align: 'right', //水平方向位置
            verticalAlign: 'top', //垂直方向位置
            layout: 'vertical',
            x: 20,
            y: 100,
            symbolWidth: 7,
            symbolHeight: 7,
            symbolRadius: 10,
            itemMarginBottom: 4,
            labelFormatter: function () {
                return (
                    '<div style="width: .3125rem;display: inline-block">' +
                    this.name +
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div style="color: #FFFFFF;float:right;display: inline-block">' +
                    this.y +
                    '%' +
                    '</div>'
                );
            },
            itemStyle: {
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: 400,
            },
        },
        series: [
            {
                type: 'pie',
                name: '民营企业结对村',
                data: [
                    ['省际边界村', 55.0],
                    {
                        name: '集体经济相对薄弱',
                        y: 26.0,
                        sliced: true,
                        selected: true,
                    },
                    {
                        name: '民族村',
                        y: 19.0,
                        sliced: true,
                        selected: true,
                    },
                ],
            },
        ],
    });
}
// 调用

function getEcharts3DBar() {
    var barWidth = 20;
    let data = [140, 180, 200, 170, 200, 125, 170, 130, 120, 190, 120];
    let sideData = data.map((item) => item + 90);
    var option = {
        title: [
            {
                text: '· 单位：（人）',
                left: 'left',
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 400,
                },
                subtextStyle: {
                    fontSize: 14,
                    color: '#fff',
                    align: 'right',
                },
            },
            {
                text: '计划数＞1000  实际数：1200',
                right: 'right',
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 400,
                },
                subtextStyle: {
                    fontSize: 14,
                    color: '#fff',
                    align: 'right',
                },
            },
        ],
        backgroundColor: {
            type: 'pattern',
            x: 45,
            y: 142,
            image: 'img/bottom.png',
            repeat: 'no-repeat',
            global: false, // 缺省为 false
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                var str = params[0].name + ':';
                params.filter(function (item) {
                    if (item.componentSubType == 'bar') {
                        str += '<br/>' + item.seriesName + '：' + item.value;
                    }
                });
                return str;
            },
        },
        grid: {
            x: '7%',
            x2: '0%',
            y: '20%',
            y2: '15%',
        },
        legend: {
            show: false,
            data: '人数',
            textStyle: {
                color: '#fff',
                fontSize: '20',
            },
        },
        xAxis: {
            data: ['杭州', '宁波', '温州', '衢州', '金华', '绍兴', '嘉兴', '舟山', '丽水', '湖州'],
            //坐标轴
            axisLine: {
                show: false,
            },
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#C5DFFB',
                    fontWeight: 500,
                    fontSize: '14',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: { show: false },
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 240,
            interval: 60,
            //坐标轴
            axisLine: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontSize: '10',
                },
            },
            axisTick: {
                show: false,
            },
            //坐标值标注
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#C5DFFB',
                },
            },
            //分格线
            splitLine: {
                show: false,
            },
        },
        series: [
            {
                z: 1,
                name: '人数',
                type: 'bar',
                barWidth: barWidth,
                barGap: '0%',
                // symbol: 'image://' + '/data/asset/img/bar.png',
                data: data,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 1, color: 'rgba(24, 144, 255, 0)' },
                        { offset: 0.5, color: 'rgba(24, 144, 255, 0.5)' },
                        { offset: 0, color: 'rgba(24, 144, 255, 0.8)' },
                    ]),
                },
            },
            {
                z: 2,
                name: '人数',
                type: 'pictorialBar',
                data: sideData,
                symbol: 'diamond',
                symbolOffset: [0, '50%'],
                symbolSize: [barWidth, 10],
                itemStyle: {
                    normal: {
                        color: 'rgba(24, 144, 255, 0)',
                    },
                },
                tooltip: {
                    show: false,
                },
            },
            {
                z: 3,
                name: '人数',
                type: 'pictorialBar',
                symbolPosition: 'end',
                data: data,
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolSize: [barWidth, (10 * barWidth) / barWidth],
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        color: 'rgba(24, 144, 255, 1)',
                    },
                },
                tooltip: {
                    show: false,
                },
            },
        ],
    };
    return option;
}

let serveTBarMoney = ref(null);

function getEcharts3DBarMoney() {
    let data = [];
    serveTBarMoney = echarts.init(document.getElementById('xzzj_bar'));
    var colorArr = ['rgba(99, 230, 255, 0.8)', 'rgba(99, 230, 255, 0)'];
    var color = {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: colorArr[0],
            },
            {
                offset: 1,
                color: colorArr[1],
            },
        ],
    };

    var colorArr1 = ['rgba(255, 241, 99, 0.8)', 'rgba(255, 241, 99, 0)'];
    var color1 = {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: colorArr1[0],
            },
            {
                offset: 1,
                color: colorArr1[1],
            },
        ],
    };
    data = [
        {
            value: 150,
            itemStyle: {
                color: color,
            },
        },
        {
            value: 190,
            itemStyle: {
                color: color1,
            },
        },
    ];
    let sideData = data.map((item) => item + 90);
    var barWidth = 20;
    var option = {
        backgroundColor: {
            // type: 'pattern',
            color: '',
            x: 50,
            y: 142,
            image: 'img/bottom@0.5.png',
            repeat: 'no-repeat',
            // global: false, // 缺省为 false
        },
        title: [
            {
                show: false,
                text: '单位: (万元) ',
                left: 'left',
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 400,
                },
                subtextStyle: {
                    fontSize: 14,
                    color: '#fff',
                    align: 'right',
                },
            },
            {
                show: false,
                text: '计划数＞1000  实际数：1200',
                left: '60%',
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 400,
                },
                subtextStyle: {
                    fontSize: 14,
                    color: '#fff',
                    align: 'right',
                },
            },
        ],
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                var str = params[0].name;
                params.filter(function (item) {
                    if (item.componentSubType == 'bar') {
                        str += '<br/>' + item.seriesName + '' + item.value;
                    }
                });
                return str;
            },
        },
        grid: {
            left: '3%',
            right: '14%',
            top: '18%',
            bottom: '3%',
            containLabel: true, //是否把标题也包括在内
        },
        legend: {
            show: false,
            textStyle: {
                color: '#fff',
                fontSize: '20',
            },
        },
        xAxis: {
            data: ['计划数', '实际数'],
            //坐标轴
            boundaryGap: true,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: '#214776',
                },
                textStyle: {
                    color: '#fff',
                    fontSize: '10',
                },
            },
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#C5DFFB',
                    fontWeight: 500,
                    fontSize: '14',
                },
            },
            axisTick: {
                textStyle: {
                    color: '#fff',
                    fontSize: '16',
                },
                show: false,
            },
            splitLine: { show: false },
        },
        yAxis: {
            type: 'value',
            //坐标轴
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: '#214776',
                },
                textStyle: {
                    color: '#fff',
                    fontSize: '10',
                },
            },
            min: 0,
            max: 240,
            interval: 60,
            axisTick: {
                show: false,
            },
            //坐标值标注
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#C5DFFB',
                },
            },
            //分格线
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#13365f',
                },
            },
        },
        series: [
            {
                z: 1,
                name: '计划数',
                type: 'bar',
                barWidth: barWidth,
                barGap: '0%',
                // symbol: 'image://' + '/data/asset/img/bar.png',
                data: [
                    {
                        value: 150,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 1, color: 'rgba(24, 144, 255, 0)' },
                                { offset: 0.5, color: 'rgba(24, 144, 255, 0.5)' },
                                { offset: 0, color: 'rgba(24, 144, 255, 0.8)' },
                            ]),
                        },
                    },
                    {
                        value: 190,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 1, color: 'rgba(255, 241, 99, 0)' },
                                { offset: 0.5, color: 'rgba(255, 241, 99, 0.5)' },
                                { offset: 0, color: 'rgba(255, 241, 99, 0.8)' },
                            ]),
                        },
                    },
                ],
            },
            {
                z: 2,
                name: '计划数',
                type: 'pictorialBar',
                data: [
                    {
                        value: 150,
                        itemStyle: {
                            color: 'rgba(24, 144, 255, 0)',
                        },
                    },
                    {
                        value: 190,
                        itemStyle: {
                            color: 'rgba(255, 241, 99, 0)',
                        },
                    },
                ],
                symbol: 'diamond',
                symbolOffset: [0, '50%'],
                symbolSize: [barWidth, 10],
                // itemStyle: {
                //     normal: {
                //         color: 'rgba(24, 144, 255, 0)',
                //     },
                // },
                tooltip: {
                    show: false,
                },
            },
            {
                z: 3,
                name: '计划数',
                type: 'pictorialBar',
                symbolPosition: 'end',
                data: [
                    {
                        value: 150,
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                color: '#63E6FF',
                            },
                        },
                    },
                    {
                        value: 190,
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                color: '#FFF163',
                            },
                        },
                    },
                ],
                symbol: 'diamond',
                symbolOffset: ['-0%', '-50%'],
                symbolSize: [barWidth, (10 * barWidth) / barWidth],
                // itemStyle: {
                //     normal: {
                //         borderWidth: 2,
                //         color: '#FFF163',
                //     },
                // },
                tooltip: {
                    show: false,
                },
            },
        ],
    };
    // return option;
    serveTBarMoney.setOption(option);
    // resizeFunGetEcharts3DBar();
}

function getjdljEcharts() {
    var colors = [
        {
            itemColor: '#FFDF33',
            areaColors: ['rgba(239, 180, 41, .3)', 'rgba(31, 255, 255, 0)'],
        },
        {
            itemColor: '#1492FF',
            areaColors: ['rgba(31, 255, 255, 0.3)', 'rgba(31, 255, 255, 0)'],
        },
    ];
    let data = {
        2021: [
            {
                name: '第一季度',
                sort: 1,
                value: 0.9,
            },
            {
                name: '第二季度',
                sort: 2,
                value: 1.6,
            },
            {
                name: '第三季度',
                sort: 3,
                value: 1.35,
            },
            {
                name: '第四季度',
                sort: 4,
                value: 1.6,
            },
        ],
        2022: [
            {
                name: '第一季度',
                sort: 1,
                value: 1.55,
            },
            {
                name: '第二季度',
                sort: 2,
                value: 1.4,
            },
            {
                name: '第三季度',
                sort: 3,
                value: 1.65,
            },
            {
                name: '第四季度',
                sort: 4,
                value: 1.8,
            },
        ],
    };
    let series = [];
    let legends = [];
    let idx = -1;
    for (let key in data) {
        idx++;
        let values = [];
        data[key].forEach((i) => {
            i['year'] = key + '年';
            values.push(i.value);
        });
        legends.push(key + '年');
        series.push({
            name: key + '年',
            type: 'line',
            symbolSize: 1,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: colors[idx].itemColor,
                },
            },
            lineStyle: {
                color: colors[idx].itemColor,
                width: 2,
                shadowColor: colors[idx].itemColor,
                shadowBlur: 10,
            },
            areaStyle: {
                // 区域填充样式
                normal: {
                    // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: colors[idx].areaColors[0],
                            },
                            {
                                offset: 1,
                                color: colors[idx].areaColors[1],
                            },
                        ],
                        false
                    ),
                },
            },
            data: values,
        });
    }
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        backgroundColor: {
            type: 'pattern',
            x: 45,
            y: 142,
            image: 'img/bottom.png',
            repeat: 'no-repeat',
            global: false, // 缺省为 false
        },
        title: {
            text: '计划数＞1000  实际数：1200',
            left: 'right',
            top: 'top',
            padding: [16, 0],
            textStyle: {
                fontSize: 14,
                fontWeight: 400,
                color: '#FFFFFF',
            },
        },
        legend: {
            show: false,
            data: legends,
            right: 10,
            top: -5,
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
            itemWidth: 12,
            itemHeight: 10,
        },
        calculable: false,
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false,
                },
                data: ['第一季度', '第二季度', '第三季度', '第四季度'],
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    },
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                name: '· 单位：（场）',
                nameGap: 20,
                min: 0,
                max: 1.8,
                interval: 0.9,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(151,151,151,.4)',
                        type: 'dashed',
                    },
                },
            },
        ],
        dataZoom: {
            type: 'inside',
        },
        series: series,
        grid: {
            top: '50',
            left: '10',
            right: '10 ',
            bottom: '10',
            containLabel: true,
        },
    };
    return option;
}

function ringInit() {
    var chart = Highcharts.chart('ringCharts', {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
            options3d: {
                enabled: true,
                alpha: 45,
            },
            spacingTop: -30, //调整饼图在页面中的位置
        },
        label: {
            style: {
                fontWeight: 'normal',
                color: '#FFFFFF',
            },
        },
        title: {
            text: '· 实践基地建设数',
            align: 'left',
            x: -15,
            y: 60,
            style: {
                color: '#FFFFFF',
                fontWeight: 400,
                fontSize: 14,
            },
        },
        subtitle: {
            text: '计划数＞1000  实际数：1200',
            align: 'right',
            x: 10,
            y: 60,
            style: {
                color: '#FFFFFF',
                fontWeight: 400,
                fontSize: 14,
            },
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        slicedOffset: 20, //选中的时候有个滑动的效果
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 20,
                innerSize: 85,
                dataLabels: {
                    enabled: false,
                    format: '{point.name}',
                },
                center: ['30%', '50%'],
                size: '100%',
                showInLegend: true,
            },
        },
        credits: {
            enabled: false, //去掉右下角的"https://highcharts.com"的所有权
        },
        colors: ['#457EFC', '#D6B431'],
        legend: {
            align: 'right', //水平方向位置
            verticalAlign: 'top', //垂直方向位置
            layout: 'vertical',
            x: 10,
            y: 100,
            symbolWidth: 7,
            symbolHeight: 7,
            symbolRadius: 10,
            itemMarginBottom: 4,
            labelFormatter: function () {
                return (
                    '<div style="width: .3125rem;display: inline-block">' +
                    this.name +
                    '&nbsp;&nbsp;&nbsp;&nbsp;</div><div style="color: #FFFFFF;display: inline-block">' +
                    this.y +
                    '%' +
                    '</div>'
                );
            },
            itemStyle: {
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: 400,
            },
        },
        series: [
            {
                type: 'pie',
                name: '·实践基地建设数',
                data: [
                    {
                        name: '建设完成',
                        y: 70.0,
                        selected: true,
                    },
                    {
                        name: '建设未完成',
                        y: 30.0,
                        selected: true,
                    },
                ],
            },
        ],
    });
}

function resizeFunGetEcharts3DBar() {
    const titleFontSize = serveTBarMoney.offsetWidth / 28.75;
    let updataOption = {
        title: {
            textStyle: {
                fontSize: titleFontSize,
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
    serveTBarMoney.setOption(updataOption);
    serveTBarMoney.resize();
}
let linchars1 = ref(null);
let lincharsDemo = ref(null);
function initLineChart() {
    lincharsDemo = document.getElementById('linchars1');
    linchars1 = echarts.init(lincharsDemo);
    let option = {
        color: '#50B4FF',
        title: [
            {
                text: '· 单位：（人）',
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 400,
                },
            },
            {
                text: '计划数＞1000  实际数：1200',
                right: 'right',
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 400,
                },
            },
        ],
        tooltip: {
            // 鼠标移动上去是否显示信息

            trigger: 'axis',
        },
        backgroundColor: {
            type: 'pattern',
            x: 45,
            y: 142,
            image: 'img/bottom.png',
            repeat: 'no-repeat',
            global: false, // 缺省为 false
        },
        // 每列标题
        legend: {
            show: false,
            // right: '5%',
            // top: '5%',
            zleval: '',
            itemWidth: 25, //图标的宽度类型number
            itemHeight: 25, //图标的高度类型number
            icon: 'circle',
        },
        grid: {
            top: '55',
            left: '20',
            right: '25',
            bottom: '5',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false,
            },
            data: ['第一季度', '第二季度', '第三季度', '第四季度'],
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                // 坐标轴轴线相关设置。
                show: false,
            },
            axisTick: {
                // 坐标轴刻度配置
                show: false,
            },
            min: 0,
            max: 1.8,
            interval: 0.9,
            // y轴背景线是否显示
            splitLine: { show: false },
            axisLabel: {
                // 坐标轴刻度标签的相关设置。
                interval: 0, // 解决x轴数据显示不完全的bug
                rotate: 0, // 旋转
                color: '#fff',
                formatter: (val) => {
                    return val;
                },
            },
        },
        // 滑动条型数据区域缩放组件（dataZoomInside）
        dataZoom: [
            {
                show: false,
            },
        ],
        series: [
            {
                name: '',
                type: 'line',
                // 是否重叠
                stack: '',
                // y轴数据显示
                label: {
                    show: true,
                    position: 'top',
                    width: 39,
                    height: 16,
                    color: '#fff',
                    backgroundColor: '#2B82FF',
                    formatter: (val) => {
                        return `${val.value}k`;
                    },
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(20, 146, 255, 0.2)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(20, 146, 255, 0)',
                        },
                    ]),
                },
                data: [1.02, 1.06, 1.66, 1.68],
                // 线条宽度
                barWidth: '',
                // 平均线
                markLine: {
                    // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                    silent: true,
                    // 平均值
                    data: [{ type: 'average', name: '' }],
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '',
                                opacity: 0, // 平均线透明度设置设置为0为隐藏,1为显示
                            },
                        },
                    },
                    label: {
                        formatter: '',
                        position: 'insideEndTop', //更多标签位置：'start', 'middle', 'end', 'insideStartTop', 'insideStartBottom', 'insideMiddleTop', 'insideMiddleBottom', 'insideEndTop', 'insideEndBottom'
                    },
                },
            },
        ],
    };
    linchars1.setOption(option);
    resizeFun();
}

function resizeFun() {
    console.log(lincharsDemo.offsetWidth);
    const titleFontSize = lincharsDemo.offsetWidth / 28.75;
    let updataOption = {
        title: {
            textStyle: {
                fontSize: titleFontSize,
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
    linchars1.setOption(updataOption);
    linchars1.resize();
}

watch(() => {});
onMounted(() => {
    pieInit();
    ringInit();

    let serveTBar = echarts.init(document.getElementById('jczy_bar'));
    serveTBar.setOption(getEcharts3DBar());
    let jdljTBar = echarts.init(document.getElementById('jdlj_bar'));
    jdljTBar.setOption(getjdljEcharts());
    getEcharts3DBarMoney();
    initLineChart();
    window.addEventListener('resize', () => {
        resizeFun();
        resizeFunGetEcharts3DBar();
    });
});
onUnmounted(() => {});
</script>
<style lang="less" scoped>
.taskExecution {
    padding: 14px 0px 20px 0;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    .content {
        // width: 1386px;
        flex: 1;
        margin: 20px 10px 56px 10px;
        padding: 15px 25px;
        background: rgba(10, 24, 87, 0.2);
        box-shadow: 12px 12px 32px 0 rgba(22, 81, 154, 0.3), -12px -12px 32px 0 rgba(22, 81, 154, 0.3);
        border-radius: 20px;
        box-sizing: border-box;
        .group {
            display: flex;
            height: 33%;
            .box {
                width: 50%;
                font-size: 24px;
                color: #cff0ff;
                font-family: 'YouSheBiaoTiHei';
                .xzzj_box {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    .xzzj_box-title {
                        position: absolute;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        font-family: PingFangSC-Regular;
                        font-weight: 400;
                        font-size: 14px;
                        color: #ffffff;
                    }
                }
                #xzzj_bar {
                    width: 70%;
                }
                .xzzj_title {
                    width: 30%;
                    margin-top: 50px;
                    .item {
                        font-size: 14px;
                        margin-top: 8px;
                        font-family: 'Lucida Grande';
                        .icon {
                            width: 12px;
                            height: 12px;
                            // opacity: 0.4;
                            // background: #4ca2ff;
                            background: radial-gradient(closest-side, rgba(76, 162, 255, 1), rgba(76, 162, 255, 0.4));
                            border-radius: 30px;
                            // filter: blur(2px);
                            display: inline-block;
                        }
                        .value {
                            float: right;
                        }
                    }
                }
            }
        }
    }
    .bg-left {
        height: 100%;
        width: 428px;
        background: url('@/assets/img/矩形备份 8.png') no-repeat;
        background-size: 100% 100%;
        padding: 28px 24px;
        box-sizing: border-box;
        .head {
            width: 100%;
            height: 50px;
            background: url('@/assets/img/矩形.png') no-repeat;
            font-family: 'YouSheBiaoTiHei';
            background-size: 100% 100%;
            font-size: 36px;
            color: #cff0ff;
            span {
                margin-left: 50px;
            }
        }
        .main {
            margin-top: 36px;
            width: 100%;
            height: calc(100% - 180px);
            .active {
                display: flex;
                justify-content: center;
                .active-tab {
                    width: 100px;
                    height: 32px;
                    background-image: linear-gradient(180deg, rgba(45, 196, 255, 0.2) 0%, rgba(20, 146, 255, 0.2) 100%),
                        linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
                    box-shadow: inset 0 -2px 5px 2px rgba(255, 255, 255, 0.15);
                    border-radius: 16px;
                    text-align: center;
                    line-height: 32px;
                    cursor: pointer;
                    &:nth-child(2) {
                        margin-left: 16px;
                    }
                }
                .actives {
                    background-image: linear-gradient(180deg, #2dc4ff 0%, #1492ff 100%) !important;
                }
            }
            .list {
                margin-top: 24px;
                height: calc(100% - 70px);
                overflow-y: auto;
                .task {
                    height: 52px;
                    background-image: linear-gradient(
                        180deg,
                        rgba(20, 146, 255, 0.3) 0%,
                        rgba(20, 146, 255, 0.01) 52%,
                        rgba(20, 146, 255, 0.3) 100%
                    );
                    font-size: 17px;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 16px;
                    align-items: center;
                    margin-bottom: 12px;
                    cursor: pointer;
                    &.taskActive {
                        background-image: linear-gradient(180deg, #2dc4ff 0%, #1492ff 100%),
                            linear-gradient(
                                180deg,
                                rgba(20, 146, 255, 0.6) 0%,
                                rgba(20, 146, 255, 0.2) 52%,
                                rgba(20, 146, 255, 0.6) 100%
                            );
                        border: 1px solid #1492ff;
                    }
                    .icon {
                        width: 16px;
                        height: 16px;
                        background: rgba(255, 255, 255, 0.1);
                        border: 1px solid #ffffff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        & > div {
                            width: 8px;
                            height: 8px;
                            background: #ffffff;
                        }
                    }
                    .task-name {
                        width: 55%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .task-tag {
                        width: 88px;
                        height: 24px;
                        white-space: nowrap;
                        border: 1px solid #ffc357;
                        border-radius: 4px;
                        font-size: 12px;
                        font-weight: 400;
                        color: #ffc357;
                        letter-spacing: 0;
                        line-height: 24px;
                        text-align: center;
                    }
                }
            }
        }
        .foot {
            display: flex;
            text-align: center;
            justify-content: center;
            margin-top: 30px;
            font-size: 18px;
            text-shadow: 0 2px 4px rgba(96, 201, 255, 0.5);
            div {
                width: 303px;
                height: 44px;
                line-height: 44px;
                background: url('@/assets/img/编组 24.png') no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .bg-right {
        height: 100%;
        width: 428px;
        background: url('@/assets/img/矩形备份 8(1).png') no-repeat;
        background-size: 100% 100%;
        padding: 28px 24px;
        box-sizing: border-box;
        .unit {
            height: 50%;
            .unit-name {
                font-size: 26px;
                color: #cff0ff;
                font-family: 'YouSheBiaoTiHei';
            }
            .unit-list {
                height: calc(100% - 20px);
                .unit-title {
                    font-size: 16px;
                }
                .unit-title,
                .units {
                    height: 56px;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 16px;
                    align-items: center;
                    font-weight: 400;
                    & > span:nth-child(1) {
                        width: 45%;
                    }
                    & > span:nth-child(2) {
                        width: 25%;
                    }
                    & > span:nth-child(3) {
                        width: 30%;
                        text-align: right;
                    }
                }
                .units {
                    font-size: 17px;
                    background: rgba(255, 255, 255, 0.1);
                    margin-bottom: 8px;
                }
            }
        }
    }
    .high {
        width: 440px;
        height: 200px;
    }
}
</style>
