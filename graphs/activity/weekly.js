$(function () {
	 Highcharts.setOptions({
     colors: ['firebrick', 'maroon', 'darkred', '#555', '#444', '#333', '#222', '#111', '#000']
    });
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'weekly',
                type: 'line'
            },
            title: {
                text: 'Last 32 weeks'
            },
            subtitle: {
                text: 'Commits per weeks'
            },
            xAxis: {
                categories: weekly_categories
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
                        this.x +' weeks ago: '+ this.y +' commits';
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
                data: weekly_data   
            }]
        });
    });
    
});
