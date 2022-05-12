<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Stock</title>
<script src="jquery/jquery-3.6.0.min.js"></script>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
	crossorigin="anonymous">
<script>
    $(function(){
      $("#nav-placeholder").load("nav.html");
    });
</script>
<style type="text/css">
body {
	font-size: 1.25rem;
	background-color: #f6f8fa;
}

td {
	line-height: 3rem;
}
</style>
</head>
<body>
	<!--Navigation bar-->
	<div id="nav-placeholder"></div>

	<div class="container">
		<div class="d-flex bd-highlight mb-3">
			<div class="me-auto p-2 bd-highlight">
				<h2>Stock
			</div>
			<div class="p-2 bd-highlight">
				<button type="button" class="btn btn-secondary"
					onclick="showUserCreateBox()">Create</button>
			</div>
		</div>

		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Product</th>
						<th scope="col">Description</th>
						<th scope="col">Price</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody id="mytable">
					<tr>
						<th scope="row" colspan="5">Loading...</th>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	
	<script src="js/stock.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
		crossorigin="anonymous"></script>
</body>
</html>