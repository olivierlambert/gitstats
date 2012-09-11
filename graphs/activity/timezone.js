
$(function () {
	 Highcharts.setOptions({
     colors: ['firebrick', 'maroon', 'darkred']
    });
    var chart;
    $(document).ready(function() {

        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'timezone',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Commit % per timezone'
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            	percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
							if (this.point.percentage > 5) { // do not draw if non significative (<5%)
	                            return '<b>'+ this.point.name +'</b>';
							}
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Hour of day',
                data: timezone_data
            }]
        });
    }); 
});
