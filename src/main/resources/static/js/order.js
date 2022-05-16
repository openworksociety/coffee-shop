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

loadOrders();

function loadOrders(){
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", API_HOST_URL + "/api/products");
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			var trHTML = '';
			const objects = JSON.parse(this.responseText);
			for (let object of objects) {
				trHTML += '<tr>';
				trHTML += '<td>' + object['id'] + '</td>';
				trHTML += '<td>' + object['name'] + '</td>';
				trHTML += '<td> <div class="form-group mb-0"> <input type="number" class="form-control cart-qty" name="cartQty'+object['id']+' id="cartQty'+object['id']+ ' value="0" min="0" max="10" onchange="onQtyChangeEvent(this.value,'+object['id']+','+object['price']+', '+objects.length+')"></div></td>';
				trHTML += '<td>' + object['price'] + '</td>';
				trHTML += '<td class="text-right" id="total-cartQty'+object['id']+'">$0</td>';
				trHTML += "</tr>";
			}
			document.getElementById("mytable").innerHTML = trHTML;
		}
	};
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