function gotoServer(){
}

$(document).ready(function(){

	$("#uterm").keyup(function(){
		//grab the text field

	var userInfo = $('#uterm').val();

	$.post("processsearch.php" ,{sterm :"+userInfo"}, function(data,status){

		$('#demo').html(data);
		});
	});
});

