var jwt = localStorage.getItem("jwt");
if (jwt == null|| jwt !="admin") {
	window.location.href = '/login';
}

const API_HOST_URL = "http://localhost:8085";

function showSalesReport(apiURL) {

	const fromDate = document.getElementById("fromDate").value;
	const toDate = document.getElementById("toDate").value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", API_HOST_URL + apiURL);
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"fromDate": fromDate, "toDate": toDate
	}));
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			var trHTML = '';
			const objects = JSON.parse(this.responseText);

			trHTML += '<table class="table table-hover">';
			trHTML += '<thead class="thead-light"> <tr>';
			trHTML += '<th scope="col">Order ID</th>';
			trHTML += '<th scope="col">Customer Name</th>';
			trHTML += '<th scope="col">Contact No</th>';
			trHTML += '<th scope="col">Total Amount</th>';
			trHTML += '<th scope="col">Note</th>';
			trHTML += '</tr></thead>';
			trHTML += '<tbody id="mytable">';

			for (let object of objects) {
				trHTML += '<tr>';
				trHTML += '<td>' + object['id'] + '</td>';
				trHTML += '<td>' + object['name'] + '</td>';
				trHTML += '<td>' + object['contact'] + '</td>';
				trHTML += '<td>' + object['totalAmount'] + '</td>';
				trHTML += '<td>' + object['note'] + '</td>';
				trHTML += "</tr>";
			}

			trHTML += '</tbody>';
			trHTML += '</table>';
			document.getElementById("showReport").innerHTML = trHTML;
		}
	};
}


function onSubmitReport() {
	var reportSelection = document.getElementById("reportSelection");
	var selectedReport = reportSelection.value;

	if (selectedReport == 1) {
		showPerformanceReport("/api/reports/showPerformanceReport");
	}else if(selectedReport == 2){
		showSalesReport("/api/reports/showOrderHistoryReport");
	}else{
		document.getElementById("showReport").innerHTML = "";
	}
}

function showPerformanceReport(apiURL) {

	const fromDate = document.getElementById("fromDate").value;
	const toDate = document.getElementById("toDate").value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", API_HOST_URL + apiURL);
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"fromDate": fromDate, "toDate": toDate
	}));
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			var trHTML = '';
			const objects = JSON.parse(this.responseText);

			trHTML += '<table class="table table-hover">';
			trHTML += '<thead class="thead-light"> <tr>';
			trHTML += '<th scope="col">Employee ID</th>';
			trHTML += '<th scope="col">Employee Name</th>';
			trHTML += '<th scope="col">No. Of Orders</th>';
			trHTML += '<th scope="col">Total Order Amount</th>';
			trHTML += '</tr></thead>';
			trHTML += '<tbody id="mytable">';

			for (let object of objects) {
				trHTML += '<tr>';
				trHTML += '<td>' + object['userId'] + '</td>';
				trHTML += '<td>' + object['username'] + '</td>';
				trHTML += '<td>' + object['totalOrders'] + '</td>';
				trHTML += '<td>' + object['totalOrderAmount'] + '</td>';
				trHTML += "</tr>";
			}

			trHTML += '</tbody>';
			trHTML += '</table>';
			document.getElementById("showReport").innerHTML = trHTML;
		}
	};
}