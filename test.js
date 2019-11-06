
//AJAX WAY OF IMPLEMENTATION USING THE "GET" METHOD

function gotoServer(){


	//stop the defualt behavior of the button
	event.preventDefault();

    
    //GETS THE USER INPUT 
	var userInfo = document.getElementById('uterm').value;
  

  // ( AJAX CODE )
 //Creation a new object / instance variable of the class XMLHttpRequest()
  var xhttp = new XMLHttpRequest();

  //method monitoring the status of the request
  //"xhttp.onreadystatechange = function() this is a callback function"
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	//
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  //this is a method in XMLHttpRequest() CLASS with the destination file being "emma.php",
  //also it means go and get me the file emma.php if the readyState == 4 && this.status == 200.

  xhttp.open("GET", "processsearch.php?sterm="+userInfo, true);

  //this is a method that sends
  xhttp.send();

}