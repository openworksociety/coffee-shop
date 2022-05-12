var jwt = localStorage.getItem("jwt");
if (jwt == null) {
	window.location.href = '/login'
}

const API_HOST_URL ="http://localhost:8085";

function onQtyChangeEvent(quantity, itemId, price, itemCount) {
	var total = (quantity * price);
	document.getElementById("total-cartQty" + itemId).innerHTML = "$" + total;

	var finalSubTotal = 0;
	for (let i = 1; i <= itemCount; i++) {
		var qtyTotal = document.getElementById("total-cartQty" + i).innerHTML.replace("$", "");
		finalSubTotal += Number(qtyTotal);
	}
	document.getElementById("subTotal").innerHTML = "$" + finalSubTotal;

	var tax = (finalSubTotal / 100) * 5;  // 5% tax will be calculated
	document.getElementById("tax").innerHTML = "$" + tax;

	var total = finalSubTotal + tax;
	document.getElementById("total").innerHTML = "$" + total;
}

function checkout() {

	const tax = document.getElementById("tax").innerHTML.replace("$", "");
	const subTotal = document.getElementById("subTotal").innerHTML.replace("$", "");
	const total = document.getElementById("total").innerHTML.replace("$", "");
	const name = document.getElementById("customerName").value;
	const contact = document.getElementById("contactNo").value;
	const specialNotes = document.getElementById("specialNotes").value;


	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", API_HOST_URL+"/api/orders/create");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"name": name, "contact": contact, "taxAmount": tax, "subTotalAmount": subTotal, "totalAmount": total,
		"note": specialNotes
	}));
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			Swal.fire({
				text: "Order successfully placed",
				icon: 'success',
				confirmButtonText: 'OK'
			}).then((result) => {
				if (result.isConfirmed) {
					window.location.reload();
				}
			});
		}
	};

}