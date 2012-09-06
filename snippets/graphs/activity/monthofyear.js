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
                categories: [
                    '2011/10',
                    '2011/11',
                    '2011/12',
                    '2012/01',
                    '2012/02',
                    '2012/03',
                    '2012/04',
                    '2012/05',
                    '2012/06',
                    '2012/07',
                    '2012/08',
                    '2012/09',
                    '2012/10',
                    '2012/11'
                ]
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
                data: [3,8,17,15,34,101,41,27,41,21,28]   
            }]
        });
    });
    
});

