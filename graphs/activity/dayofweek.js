$(function () {
	 Highcharts.setOptions({
     colors: ['firebrick', 'maroon', 'darkred', '#555', '#444', '#333', '#222', '#111', '#000']
    });
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'dayofweek',
                type: 'column'
            },
            title: {
                text: 'Commits per day of week'
            },
            xAxis: {
                categories: dayofweek_categories
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Commits'
                }
            },
            legend: {
                layout: 'vertical',
                backgroundColor: '#FFFFFF',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                shadow: true
            },
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y +' commits';
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
                series: [{
                name: 'Commits',
                data: dayofweek_data 
            }]
        });
    });
    
});
