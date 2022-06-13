<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home</title>
<script src="jquery/jquery-3.6.0.min.js"></script>
<script>
	$(function() {
			var name = localStorage.getItem("jwt");
			if(name=="admin"){
				$("#nav-placeholder").load("nav.html");
			}else{
				$("#nav-placeholder").load("user-nav.html");
			}
	});
</script>
</head>
<body>

	<!--Navigation bar-->
	<div id="nav-placeholder"></div>
	
</body>
</html>