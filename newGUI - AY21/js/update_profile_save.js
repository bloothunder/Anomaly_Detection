/**
 * Created by Jason.Hussey on 4/18/2017.
 */
function updateProfile(){

	var xmlhttp;

	// Create an object to interface with the server
	// IF triggered if it's any modern browser, ELSE otherwise.
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	// This code will be executed each time the readyState of the object changes
	xmlhttp.onreadystatechange = function(){
		// readyState 4 indicates response received and processed
		if(this.readyState == 4){

			// create an object using JSON.parse from the response text
			// response text must be in JSON format
			var myJSON = this.responseText;
			console.log(myJSON)
			var myObj = JSON.parse(myJSON);
			console.log(myObj)
			
			//locate 'data:[date, measurement]]' array - the value of the 'name' 
			//var values = $.map(myObj, function(key, value) { return value });
			//console.log(values)
			//for loop to get the first element in the list of the 'data: [date, measurement]' lists
		//	var myObj = myObj;
		//	var objec = myObj[0];
		//	var objec1 = objec[1];
		//	console.log(objec)
		//	console.log(objec1)
			
            var myChart = Highcharts.chart('container', {

            title: {
                text: 'Time Series Measurement Data for SEL'
            },
			xAxis: {
			type: 'datetime',
           // tickPixelInterval: 150,
			//dateTimeLabelFormats: {
			//	month: '%Y %b, %e',
			//	year: '%Y'
			//}	
			},
			
			rangeSelector:{
				enabled:true
				
			}
			
            yAxis: {
                title: {
                    text: 'Measurement Value'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
			
            plotOptions: {
                series: {
					pointStart: Date.UTC(2017, 3, 20,15,02,43.0),
					pointInterval: 16,
                    //pointStart: 0,
                    turboThreshold: 0
                }
            },
			//tooltip: {
			//crosshairs: true,
			//formatter: function () {
			//return '<b>' + Highcharts.dateFormat('%e. %b %Y, %H:00', this.x) + '</b> ' + this.series.name + ': ' + this.y + ' m/s';
		//	}
			//},
            series:myObj
			

	        });
        }
	};

	// Build the GET request to the server
	var value = document.getElementById("mySelect").value
	var url = "hist_list.py?SignalID=" + value;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

}