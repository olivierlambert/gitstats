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
                categories: [
                    '32',
                    '31',
                    '30',
                    '29',
                    '28',
                    '27',
                    '26',
                    '25',
                    '24',
                    '23',
                    '22',
                    '21',
                    '20',
                    '19',
                    '18',
                    '17',
                    '16',
                    '15',
                    '14',
                    '13',
                    '12',
                    '11',
                    '10',
                    '9',
                    '8',
                    '7',
                    '6',
                    '5',
                    '4',
                    '3',
                    '2',
                    '1'
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
                data: [13,3,1,7,9,7,6,16,11,22,34,25,20,4,9,11,10,1,8,4,0,2,6,8,1,1,1,1,4,1,2,3]   
            }]
        });
    });
    
});
