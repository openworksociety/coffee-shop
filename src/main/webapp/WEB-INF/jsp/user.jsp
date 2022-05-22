<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="jquery/jquery-3.6.0.min.js"></script>
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="css/user.css">
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
		<div class="d-flex bd-highlight mb-3">
			<div class="me-auto p-2 bd-highlight">
				<h2>Users
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
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Username</th>
						<th scope="col">Password</th>
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

	<script src="js/user.js"></script>

	<script
		src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>