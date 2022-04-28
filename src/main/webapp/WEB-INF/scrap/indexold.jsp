<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<script src="jquery/jquery.min.js"></script>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
<script src="js/bootstrap.min.js"></script>
<link rel="icon" href="images/icon.png" type="image/x-icon" />
<link href="https://fonts.googleapis.com/css?family=Lobster"
	rel="stylesheet">

<style type="text/css">
body {
	background-color: #eee;
}

.container-fluid {
	padding: 50px;
}

.container {
	background-color: white;
	padding: 50px;
}

#title {
	font-family: 'Lobster', cursive;;
}
</style>


</head>
<body>
	<div class="container-fluid">
		<div class="container">
			<h2 class="text-center" id="title">The Famous Coffee Shop</h2>
			<p class="text-center">
				<small id="passwordHelpInline" class="text-muted">
					We don't make your coffee. We make your day.
				</small>
			</p>
			<hr>
			<div class="row">
				<div class="col-md-5">
					<form role="form" method="post" action="/register">
						<fieldset>
							<p class="text-uppercase pull-center">Sign Up</p>
							<div class="form-group">
								<input type="text" name="username" id="username"
									class="form-control input-lg" placeholder="username">
							</div>

							<div class="form-group">
								<input type="email" name="email" id="email"
									class="form-control input-lg" placeholder="Email Address">
							</div>
							<div class="form-group">
								<input type="password" name="password" id="password"
									class="form-control input-lg" placeholder="Password">
							</div>
							<div class="form-group">
								<input type="password" name="password2" id="password2"
									class="form-control input-lg" placeholder="Password2">
							</div>
							<div class="form-check">
								<label class="form-check-label"> <input type="checkbox"
									class="form-check-input"> By Clicking register you're
									agree to our policy & terms
								</label>
							</div>
							<div>
								<input type="submit" class="btn btn-md btn-primary" value="Register">
							</div>
						</fieldset>
					</form>
				</div>

				<div class="col-md-2">
					<!-------null------>
				</div>

				<div class="col-md-5">
					<form role="form" method="post" action="/login">
						<fieldset>
							<p class="text-uppercase">Login using your account:</p>

							<div class="form-group">
								<input type="email" name="username" id="username"
									class="form-control input-lg" placeholder="username">
							</div>
							<div class="form-group">
								<input type="password" name="password" id="password"
									class="form-control input-lg" placeholder="Password">
							</div>
							<div>
								<input type="submit" class="btn btn-md btn-primary" value="Sign In">
							</div>

						</fieldset>
					</form>
				</div>
			</div>
		</div>
		<p class="text-center">
			<small class="text-muted"> Developer: Rohan Kumbhar </small>
		</p>
	</div>
</body>
</html>