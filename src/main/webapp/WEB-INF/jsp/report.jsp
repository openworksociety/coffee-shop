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
<link href="css/report.css" rel="stylesheet">
<script>
	$(function() {
		$("#nav-placeholder").load("nav.html");
	});
</script>
</head>
<body>
	<!--Navigation bar-->
	<div id="nav-placeholder"></div>


	<div class="container overflow-hidden">

		<div class="row">
			<h2>Reports</h2>
		</div>
		<div class="row">
			<div class="col-4">
				<select id="reportSelection" class="form-select" aria-label="Default select example"
					name="Select Your
					Report" onchange="onReportSelectionChange()">
					<option value="0" selected>Select Your Report</option>
					<option value="1">Employee Performance Report</option>
					<option value="2">Order History</option>
				</select>
			</div>
			<div class="col-6">
				<label for="fromDate">Start Date:<span></span></label><input
					type="date" id="fromDate" name="fromDate"> <label
					for="toDate">To Date: </label> <input type="date" id="toDate"
					name="toDate">
			</div>
			<div class="col-2">
			<button type="button" class="btn btn-secondary"
					onclick="onSubmitReport()">Submit</button>
			</div>
		</div>

		<div class="row" id="showReport"></div>
		
	</div>
	
	<script
		src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>