$(function () {
    var chart;
    $(document).ready(function() {
		
    	// Radialize the colors
		Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function(color) {
		    return {
		        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
		        stops: [
		            [0, color],
		            [1, Highcharts.Color(color).brighten(-0.8).get('rgb')] // darken
		        ]
		    };
		});		
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'hourofday',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Commit % per hour of day'
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
                data: [
					['00h', 0],
					['01h', 0], 
					['02h', 0], 
					['03h', 0], 
					['04h', 0], 
					['05h', 0], 
					['06h', 0], 
					['07h', 1], 
					['08h', 0], 
					['09h', 19], 
					['10h', 42], 
					['11h', 60], 
					['12h', 32], 
					['13h', 17], 
					['14h', 32], 
					['15h', 47], 
					['16h', 42], 
					['17h', 41], 
					['18h', 2], 
					['19h', 0], 
					['20h', 0], 
					['21h', 0], 
					['22h', 0], 
					['23h', 0]
					]   
            }]
        });
    }); 
});
