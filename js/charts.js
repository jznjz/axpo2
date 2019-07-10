var uploadedDataURL = "/asset/get/s/data-1559121268278-ozjd-lXoz.png";

var uploadedDataURL = "/asset/get/s/data-1559121263841-UC5w7mTJ9.png";

var uploadedDataURL = "/asset/get/s/data-1559121259198-sxyPSimU9.png";

var uploadedDataURL = "/asset/get/s/data-1559121254241-xj5JAIBzC.png";

var uploadedDataURL = "/asset/get/s/data-1559121249274-QxHDAdQGy.png";

var colorList = ['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c', "rgba(250,250,250,0.5)"];
var sportsIcon = {
    'a': '/asset/get/s/data-1559121268278-ozjd-lXoz.png',
    'b': '/asset/get/s/data-1559121263841-UC5w7mTJ9.png',
    'c': '/asset/get/s/data-1559121259198-sxyPSimU9.png',
    'd': '/asset/get/s/data-1559121254241-xj5JAIBzC.png',
    'e': '/asset/get/s/data-1559121249274-QxHDAdQGy.png',
};
echarts.init(document.getElementById('c1')).setOption({
    title: {
        text: '80',
        subtext: '总平均值(分)',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 30,
            fontWeight: 'normal',
            color: ['#333']
        },
        subtextStyle: {
            color: '#666',
            fontSize: 16
        },
    },
    grid: {
        bottom: 150,
        left: 0,
        right: '10%'
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: "middle",
        right: "5%",
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,

        },
        icon: 'roundRect'
    },
    series: [
        // 主要展示层的
        {
            radius: ['25%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 15,
                    length2: 120,
                    lineStyle: {
                        color: '#d3d3d3'
                    },
                    align: 'right'
                },
                color: "#000",
                emphasis: {
                    show: true
                }
            },
            label: {
                normal: {
                    formatter: function(params) {
                        var str = '';
                        switch (params.name) {
                            case '体育技能':
                                str = '{a|}\n{nameStyle|体育技能 }' + '{rate|' + params.value + '%}';
                                break;
                            case '体育行为':
                                str = '{b|}\n{nameStyle|体育行为 }' + '{rate|' + params.value + '%}';
                                break;
                            case '体质健康':
                                str = '{c|}\n{nameStyle|体质健康 }' + '{rate|' + params.value + '%}';
                                break;
                            case '体育意识':
                                str = '{d|}\n{nameStyle|体育意识 }' + '{rate|' + params.value + '%}';
                                break;
                            case '体育知识':
                                str = '{e|}\n{nameStyle|体育知识 }' + '{rate|' + params.value + '%}';
                                break;
                        }
                        return str
                    },
                    padding: [0, -110],
                    height: 165,
                    rich: {
                        a: {
                            width: 38,
                            height: 38,
                            lineHeight: 50,
                            backgroundColor: {
                                image: sportsIcon.e
                            },
                            align: 'left'
                        },
                        b: {
                            width: 29,
                            height: 45,
                            lineHeight: 50,
                            backgroundColor: {
                                image: sportsIcon.d
                            },
                            align: 'left'
                        },
                        c: {
                            width: 34,
                            height: 33,
                            lineHeight: 50,
                            backgroundColor: {
                                image: sportsIcon.c
                            },
                            align: 'left'
                        },
                        d: {
                            width: 34,
                            height: 44,
                            lineHeight: 50,
                            backgroundColor: {
                                image: sportsIcon.b
                            },
                            align: 'left'
                        },
                        e: {
                            width: 38,
                            height: 30,
                            lineHeight: 50,
                            backgroundColor: {
                                image: sportsIcon.a
                            },
                            align: 'left'
                        },
                        nameStyle: {
                            fontSize: 16,
                            color: "#555",
                            align: 'left'
                        },
                        rate: {
                            fontSize: 20,
                            color: "#1ab4b8",
                            align: 'left'
                        }
                    }
                }
            },
            data: [{
                    value: 17,
                    name: '体育技能',
                },
                {
                    value: 23,
                    name: '体育行为'
                },
                {
                    value: 27,
                    name: '体质健康'
                },
                {
                    value: 33,
                    name: '体育意识'
                },
                {
                    value: 9,
                    name: '体育知识'
                }
            ],
        },
        // 边框的设置
        {
            radius: ['47%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(250,250,250,0.5)'
                }
            },
            data: [{
                value: 1,
            }],
        }
    ]
});

var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
var data4 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
var datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'];
echarts.init(document.getElementById('c2')).setOption({
    color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {

        top: '8%',
        data: ['存量', '新增', '拆除', '整改'],
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} '
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: '#000'
            },

        },
        data: datacity,
    }],
    series: [{
            name: '存量',
            type: 'bar',
            stack: 'sum',
            barWidth: '20px',
            data: data1

        },
        {
            name: '新增',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data2,

        },
        {
            name: '拆除',
            type: 'bar',
            color: '#F6931C',
            stack: 'sum1',
            barWidth: '20px',
            data: data3

        },
        {
            name: '整改',
            type: 'bar',
            color: '#FFD52E',
            stack: 'sum1',
            barWidth: '20px',
            data: data3

        },
    ]
});