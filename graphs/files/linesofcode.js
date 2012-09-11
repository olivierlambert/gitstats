$(function () {
	
var options = {
	chart: {
		renderTo: 'linesofcode',
		type: 'line',
	},
	title: {
		text: 'Lines of code'
	},
	xAxis: {
		type: 'datetime'
	},
	yAxis: {
		title: {
			text: 'Lines'
			},
			min: 0
	},
	tooltip: {
		formatter: function() {
				return '<b>'+ this.series.name +'</b><br/>'+
				Highcharts.dateFormat('%e. %b %y', this.x) +': '+ this.y;
		}
	},
	plotOptions: {
		line: {
			lineWidth: 2,
			marker: {
				enabled: false
			}
		}
	},
	series: [{
	name: 'Lines of code',
    data: linesofcode_data
	}]
};		

var chart = new Highcharts.Chart(options);
});
