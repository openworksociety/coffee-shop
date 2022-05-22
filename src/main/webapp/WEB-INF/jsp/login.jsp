<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap CSS -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
	rel="stylesheet">
<link href="css/login.css" rel="stylesheet">
</head>
<body class="text-center">
	<main class="form-signin">
		<form onsubmit="return login()">
			<img class="mb-4" src="./logo.png" alt="" height="300">
			<h1 class="h3 mb-3 fw-normal">
				<b>Cafe Coffee Store</b> - Login
			</h1>

			<div class="form-floating">
				<input type="text" class="form-control" id="username"
					placeholder="name@example.com"> <label for="floatingInput">Email
					address</label>
			</div>
			<div class="form-floating">
				<input type="password" class="form-control" id="password"
					placeholder="Password"> <label for="floatingPassword">Password</label>
			</div>

			<button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Login</button>
			<p class="mt-5 mb-3 text-muted"></p>
		</form>
	</main>

	<script src="js/login.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>