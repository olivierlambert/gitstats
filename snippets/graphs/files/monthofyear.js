$(function () {
Highcharts.setOptions({
 colors: ['firebrick', 'limegreen']
});
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: 'Lines removed/added per month'
            },
            xAxis: {
                categories: ['2011/10','2011/11','2011/12','2012/01','2012/02','2012/03','2012/04','2012/05','2012/06','2012/07','2012/08','2012/09','2012/10','2012/11'],
                opposite: false
            },
            yAxis: {
                title: {
                    text: 'Commits'
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            tooltip: {
                formatter: function() {
                    return ''+
                        this.series.name +': '+ this.y +'';
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Lines removed',
                data: [-37308,-2192,-1997,-1765,-7445,-3343,-3713,-126,-960,-786,-48]
            }, {
                name: 'Lines added',
                data: [85776,4482,7767,5006,15700,11592,3698,1060,1277,3875,5]
            }]
        });
    });
    
});

