$(function () {
	 Highcharts.setOptions({
     colors: ['firebrick', 'maroon', 'darkred', '#555', '#444', '#333', '#222', '#111', '#000']
    });
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'monthofyear',
                type: 'column'
            },
            title: {
                text: 'Commits per month of year'
            },
            xAxis: {
                categories: monthofyear_categories
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Commits'
                }
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
                data: monthofyear_data
            }]
        });
    });
    
});

