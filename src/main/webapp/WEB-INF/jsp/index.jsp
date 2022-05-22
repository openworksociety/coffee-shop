<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home</title>
<script src="jquery/jquery-3.6.0.min.js"></script>
<script src="js/index.js"></script>
<script>
	$(function() {
		$("#nav-placeholder").load("nav.html");
	});
</script>
</head>
<body>

	<!--Navigation bar-->
	<div id="nav-placeholder"></div>

	<div id="carouselExampleIndicators" class="carousel slide"
		data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0"
				class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img class="d-block w-100" src="https://www.mecallapi.com/users/cat.png" alt="First slide" width="400" height="800">
			</div>
			<div class="carousel-item">
				<img class="d-block w-100" src="https://www.mecallapi.com/users/cat.png" alt="Second slide"  width="00" height="800">
			</div>
			<div class="carousel-item">
				<img class="d-block w-100" src="https://www.mecallapi.com/users/cat.png" alt="Third slide"  width="400" height="800">
			</div>
		</div>
		<a class="carousel-control-prev" href="#carouselExampleIndicators"
			role="button" data-slide="prev"> <span
			class="carousel-control-prev-icon" aria-hidden="true"></span> <span
			class="sr-only">Previous</span>
		</a> <a class="carousel-control-next" href="#carouselExampleIndicators"
			role="button" data-slide="next"> <span
			class="carousel-control-next-icon" aria-hidden="true"></span> <span
			class="sr-only">Next</span>
		</a>
	</div>
</body>
</html>