var date = ['05/20', '05/21', '05/22', '05/23', '05/24', '05/25', '05/26', '05/27', '05/28', '05/29', '05/30', '05/31', '06/01', '06/02', '06/03', '06/04', '06/05', '06/06', '06/07', '06/08', '06/09', '06/10', '06/11', '06/12', '06/13', '06/14', '06/15', '06/16', '06/17', '06/18', '06/19', '06/20', '06/21', '06/22', '06/23', '06/24', '06/25', '06/26', '06/27', '06/28', '06/29', '06/30', '07/01', '07/02', '07/03', '07/04', '07/05', '07/06'];

var dayData =      [2, 5, 3, 5, 6, 5, 4, 5, 6, 5, 6, 5, 0, 2, 7, 5, 10, 0, 0, 2, 1, 0, 0, 5, 6, 5, 5, 3, 2, 9, 5, 0, 0, 2, 6, 6, 5, 5, 1, 1, 0, 0,0, 3, 6, 0, 5, 0];

var expectedData = [295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530];

var allData =      [290, 292, 297, 300, 305, 309, 314, 320, 326, 331, 337, 342, 342, 344, 354, 359, 369, 369, 369, 371, 372, 372, 372, 377, 383, 388, 393, 396, 398, 407, 412, 412, 412, 414, 420, 426, 431, 436, 437, 438, 438, 438, 438, 441, 447, 447, 452, 452];

var exNum = expectedData[allData.length - 1] - allData[0] + 1;
var totalNum = allData[allData.length - 1] - allData[0] + 1;
var dayNum = date.length;
var averNum = totalNum / dayNum;

document.getElementById("exNum").innerHTML = exNum;
document.getElementById("totalNum").innerHTML = totalNum;
document.getElementById("dayNum").innerHTML = dayNum;
document.getElementById("averNum").innerHTML = averNum.toFixed(2);

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
        categories: date
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
        data: dayData
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
        categories: date
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
        data: allData
    },{
        name: 'Expected',
        data: expectedData
    }]
});
