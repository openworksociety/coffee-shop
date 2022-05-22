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
	rel="stylesheet">
<script src="js/stock.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
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
				<h2>Stock</h2>
			</div>
			<div class="p-2 bd-highlight">
				<button type="button" class="btn btn-secondary"
					onclick="showAllItems()">Show deactivated</button>
			</div>
			<div class="p-2 bd-highlight">
				<button type="button" class="btn btn-secondary"
					onclick="showUserCreateBox()">Create</button>
			</div>
		</div>

		<div class="table-responsive">
			<table class="table table-hover">
				<thead class="thead-light">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Product</th>
						<th scope="col">Description</th>
						<th scope="col">Price(Rs.)</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody id="mytable">
					<tr>
						<th scope="row" colspan="5" class="spinner-border text-primary"
							role="status"><span class="visually-hidden">Loading...</span></th>
					</tr>
				</tbody>
			</table>
		</div>
	</div>


</body>
</html>