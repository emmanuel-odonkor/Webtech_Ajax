function gotoServer(){
}

$(document).ready(function(){

	$("#uterm").keyup(function(){
		//grab the text field

	var userInfo = $('#uterm').serialize();

	$.get("processsearch.php?sterm="+userInfo, function(data,status){

		$('#demo').html(data);
		});
	});
});