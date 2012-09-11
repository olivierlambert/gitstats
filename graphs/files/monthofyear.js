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
                opposite: false,
                categories: monthofyears_categories
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
                data: monthofyears_lines_removed
            }, {
                name: 'Lines added',
                data: monthofyears_lines_added
            }]
        });
    });
    
});

