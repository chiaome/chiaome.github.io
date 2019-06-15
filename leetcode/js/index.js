Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Daily Leetcode Records'
    },
    subtitle: {
        text: '2019'
    },
    credits: {
        enabled: false
    },

    xAxis: {
        categories: ['05/20', '05/21', '05/22', '05/23', '05/24', '05/25', '05/26', '05/27', '05/28', '05/29', '05/30', '05/31', '06/01', '06/02', '06/03', '06/04', '06/05', '06/06', '06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13', '06/14', '06/15']
    },
    yAxis: {
        title: {
            text: 'Solved'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'First Round',
        data: [2, 5, 3, 5, 6, 5, 4, 5, 6, 5, 6, 5, 0, 2, 7, 5, 10, 0, 0, 2, 1, 0, 0, 5, 6, 5, 0]
    }]
});

Highcharts.chart('container2', {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['05/20', '05/21', '05/22', '05/23', '05/24', '05/25', '05/26', '05/27', '05/28', '05/29', '05/30', '05/31', '06/01', '06/02', '06/03', '06/04', '06/05', '06/06', '06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13', '06/14', '06/15']
    },
    yAxis: {
        title: {
            text: 'Solved'
        }
    },
    credits: {
        enabled: false
    },

    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Done',
        data: [290, 292, 297, 300, 305, 309, 314, 320, 326, 331, 337, 342, 342, 344, 354, 359, 369, 369, 369, 371, 372, 372, 372, 377, 383, 388, 388]
    },{
        name: 'Expected',
        data: [295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425]
    }]
});
