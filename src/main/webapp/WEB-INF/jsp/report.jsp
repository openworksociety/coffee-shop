<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Report</title>

<link rel="stylesheet" href="css/bootstrap.min.css">

<script src="js/report.js"></script>
<script src="js/bootstrap.min.js"></script>

<script src="jquery/jquery-3.6.0.min.js"></script>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
	rel="stylesheet">
<script>
	$(function() {
		$("#nav-placeholder").load("nav.html");
	});
</script>
</head>
<body>
	<!--Navigation bar-->
	<div id="nav-placeholder"></div>


	<div class="container">

		<div class="row">
			<h2>Reports
		</div>
		<div class="row">
			<div class="col gy-4">
				<label for="reportSelection" class="form-label">Select Your
					Report</label>
			</div>
			<div class="col gy-4">
				<select class="form-select" aria-label="Default select example">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
		</div>


		<div class=" col gy-4">
			<table id="mytable" class="table">
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


	<script
		src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>