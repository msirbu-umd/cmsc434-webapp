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
		
		
        title : {
                text : 'VOTER ID LAWS'
            },
						subtitle: {
                        text: 'Source: <a href="http://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx">NCSL</a>'
                    },

        legend: {
            enabled: true
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
						series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
												   //console.log(this); 
													 //console.log(this.name); 
                           location.href = this.name+"_statepage";  
                        }
                    }
                }
            }
        },

				
				
				
        series : [{
            name: 'No document required to vote',
						color: '#A1A1A1',
            data: $.map(['ME', 'VT', 'NJ', 'MA', 'MD', 'DC', 'NY', 'PA', 'WV',
						'IL', 'IA', 'MN', 'NE', 'WY', 'NM', 'NV', 'CA', 'OR'], function (code) {
                return { code: code };
            })
        }, {
            name: 'ID requested; photo not required',
						color: '#8EFBBF',
            data: $.map(['AK', 'WA', 'MT', 'UT', 'CO', 'OK', 'MO', 'AR', 'KY',
						'NC', 'SC', 'DE', 'NH', 'CT'], function (code) {
                return { code: code };
            })
        }, {
            name: 'Photo ID requested',
						color: '#32BF72', 
            data: $.map(['ID', 'SD', 'MI', 'LA', 'AL', 'FL', 'HI'], function (code) {
                return { code: code };
            })
        }, {
            name: 'Strict Non-Photo ID',
						color: '#078841',
            data: $.map(['AZ','OH'], function (code) {
                return { code: code };
            })
        },{
            name: 'Strict Photo ID',
						color: '#044B24',
            data: $.map(['TX','KS','ND','WI','IN','TN','MS','GA','VA'], function (code) {
                return { code: code };
            })
        }]
    });
});