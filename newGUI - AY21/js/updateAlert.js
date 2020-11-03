function updateAlert(){
	console.log("updateAlert Running");
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
			// response text must be in JSON format'
			console.log("You're close");
			var myJSON = this.responseText;
			var myObj = JSON.parse(myJSON);
			document.getElementById("myTextarea").value = ""
			if(myJSON != "{}"){
				
				var img = document.getElementById("status");
				img.style.visibility="visible";
				
				
			}
			else{
				var img = document.getElementById("status");
				img.style.visibility="hidden";
			}
			for (i in myObj)
			{
				var anomName = myObj[i].name;
				document.getElementById("myTextarea").value += "Anomaly at " + anomName + "\n";
				if(myObj[i].startCon && myObj[i].endCon){
					//Console.log(myObj[i].startCon); 
					//Console.log(myObj[i].endCon);
				}
				if(myObj[i].startTemp && myObj[i].endTemp){
					//Console.log(myObj[i].startTemp);
					//Console.log(myObj[i].endTemp);
				}
			}
		}
	}
	// Build the GET request to the server
	xmlhttp.open("GET","alerts.txt",true);
	xmlhttp.send();	
}