
//THIS FUNCTION PERFORMS THE AJAX POST REQUEST USING "JQUERY"
function GotoServer(){
	$(document).ready(function(){
    
    //Implements the keyyp event which performs a predictive lookup based om the inserted countries
    $("form").keyup(function(event){

        // Stop form from submitting normally
        event.preventDefault();
        
        /* Serialize the submitted form control values to be sent to the web server with the request */
        var formValues = $(this).serialize();
        
        // Send the form data using post
        $.post("processsearch.php", formValues, function(data){
        	
            // Display the returned data in browser
            $("#demo").html(data);
        });
    });
});
}