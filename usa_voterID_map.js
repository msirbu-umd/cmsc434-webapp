/*
This script is used to create the initial voter ID law map on the main
landing page. To implement the map we used a third party library called
highmaps. 
*/

$(function () {

    var data = Highcharts.geojson(Highcharts.maps['countries/us/us-all']),
    // Some responsiveness
        small = $('#container').width() < 400;

    //console.log(this.properties);
    $.each(data, function (i) {
        this.drilldown = this.properties['hc-key'];
    });
    //console.log(data);

    //spacingBottom: 20
    // Instanciate the map
    $('#container').highcharts('Map', {

        chart: {
            backgroundColor: '#272b30'
        },
        title: {
            text: 'VOTER ID LAWS',
            style: {
                color: '#F0F8FF'
            }
        },
        subtitle: {
            text: 'Source: <a href="http://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx">NCSL</a>'
        },

        legend: {
            enabled: true,
            title: {
                text: "ID Requirements",
                style: {
                    color: '#FFFFFF',
                    fontSize: '15px'
                }
            },
            itemStyle: {
                color: 'white',
                fontSize: '15px'

            }
        },

        plotOptions: {
            map: {
                allAreas: false,
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                mapData: Highcharts.maps['countries/us/us-all'],
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}: <b>{series.name}</b>'
                }

            },
						//This allows the clicking to the Maryland state page to happen.
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            //console.log(this);
                            //console.log(this.name);
                            location.href = this.name + "_statepage.html";
                        }
                    }
                }
            }
        },

				//The different states and the various voter ID requirements for each
				//We give each a different color.
        series: [{
            name: 'No document required to vote',
            color: '#A1A1A1',
            data: $.map(['ME', 'VT', 'NJ', 'MA', 'MD', 'DC', 'NY', 'PA', 'WV',
                'IL', 'IA', 'MN', 'NE', 'WY', 'NM', 'NV', 'CA', 'OR'], function (code) {
                return {code: code};
            })
        }, {
            name: 'ID requested; photo not required',
            color: '#8EFBBF',
            data: $.map(['AK', 'WA', 'MT', 'UT', 'CO', 'OK', 'MO', 'AR', 'KY',
                'NC', 'SC', 'DE', 'NH', 'CT', 'RI'], function (code) {
                return {code: code};
            })
        }, {
            name: 'Photo ID requested',
            color: '#32BF72',
            data: $.map(['ID', 'SD', 'MI', 'LA', 'AL', 'FL', 'HI'], function (code) {
                return {code: code};
            })
        }, {
            name: 'Strict Non-Photo ID',
            color: '#078841',
            data: $.map(['AZ', 'OH'], function (code) {
                return {code: code};
            })
        }, {
            name: 'Strict Photo ID',
            color: '#044B24',
            data: $.map(['TX', 'KS', 'ND', 'WI', 'IN', 'TN', 'MS', 'GA', 'VA'], function (code) {
                return {code: code};
            })
        }]
    },function(chart) {
							//This is used to center the legend on the page. 
							var legWidth = this.legend.maxItemWidth; // width of legend
							console.log(legWidth);
							 $('.highcharts-legend-title').attr({
								  transform: 'translate(' + (legWidth + 75) + ',0)',
									'text-anchor': 'middle'
								})
						});
});
