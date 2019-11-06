
//THIS FUNCTION PERFORMS AJAX POST REQUEST

function gotoServer() {
    // //Creation a new object / instance of the class XMLHttpRequest()
    var request = new XMLHttpRequest();
    
    // Using the POST request to go to the server and open the php file "processsearch.php"
    request.open("POST", "processsearch.php");
    
    /*Defining event listener for readystatechange event and also
     method monitoring the status of the request.
  "xhttp.onreadystatechange = function() this is a callback function"*/

    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {

            // Inserting the response from server into an HTML element
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    
    // Retrieving the form data using the id which is  "searchform" since we are using JavaScript
    var myForm = document.getElementById("searchform");

    //Creates 
    var formData = new FormData(myForm);

    // Sending the request to the server
    request.send(formData);
}
