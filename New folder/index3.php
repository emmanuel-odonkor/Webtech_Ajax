<!DOCTYPE html>
<html>
<head>
	<title>Ajax</title>
	
	<script type="text/javascript" src="Work.js"></script>
	<!--<script type="text/javascript" src="jquery-3.4.1.js"></script>-->
	<!--<script type="text/javascript" src="jquery.js"></script>-->
	
</head>
<body>
	<div style="margin: 0 auto; text-align: center; padding-top: 10%; font-size: 20px;">
		<h1>Learn Ajax</h1>

		<form action=" " id="searchform">
			<label>Search Term</label>
			<input onkeyup="postComment()" type="text" size="25" name="sterm" id="uterm">
			<!--<input onclick="gotoServer()" type="submit" name="findme" value="Search">-->
		</form>
    <!--<button onclick="loadDoc()">Click Me</button>-->
    <span id="demo"></span>
	</div>
	

</body>
</html>