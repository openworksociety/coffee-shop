var jwt = localStorage.getItem("jwt");
if (jwt == null) {
	window.location.href = '/login'
}

const API_HOST_URL = "http://localhost:8085";
let selectedOrders = new Array();
let allOrders = new Array();

//On Page load call this method
loadOrders();

function loadOrders() {
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
				trHTML += '<td> <div class="form-group mb-0"> <input type="number" class="form-control cart-qty" name="cartQty' + object['id'] + ' id="cartQty' + object['id'] + ' value="0" min="0" max="25" onchange="onQtyChangeEvent(this.value,' + object['id'] + ',' + object['price'] + ', ' + objects.length + ')"></div></td>';
				trHTML += '<td>' + object['price'] + '</td>';
				trHTML += '<td class="text-right" id="total-cartQty' + object['id'] + '">Rs.0</td>';
				trHTML += "</tr>";

				allOrders.push(object);
			}
			document.getElementById("mytable").innerHTML = trHTML;
		}
	};
}


function confirmCheckout() {



	const tax = document.getElementById("tax").innerHTML.replace("Rs.", "");
	const subTotal = document.getElementById("subTotal").innerHTML.replace("Rs.", "");
	const total = document.getElementById("total").innerHTML.replace("Rs.", "");

	if (total == "" || total == 0) {
		Swal.fire({
			text: "Please Select Items to checkout",
			icon: 'error',
		});
		return;
	}
	
	const customerName = document.getElementById("customerName").value;
	const contactNo = document.getElementById("contactNo").value;
	if (customerName == "" || contactNo == "") {
		Swal.fire({
			text: "Please Enter Customer Detail",
			icon: 'error',
		});
		return;
	}
	

	if (total > 0) {
		Swal.fire({
			title: 'Confirm your order',
			html:
				'<div class="row">' +
				'<div class="col"> <label>Sub Total Amount: </label> </div>' +
				'<div class="col"> ' + subTotal + ' </div>' +
				'</div>' +
				'<div class="row">' +
				'<div class="col"> <label>Total Tax Amount: </label> </div>' +
				'<div class="col"> ' + tax + ' </div>' +
				'</div>' +
				'<div class="row">' +
				'<div class="col"> <label>Total Amount: </label> </div>' +
				'<div class="col"> ' + total + ' </div>' +
				'</div>'
			,
			showCancelButton: true,
			confirmButtonText: 'Save'
		}).then((result) => {
			if (result.isConfirmed) {
				checkout();
			}
		})
	}

}

function checkout() {

	const tax = document.getElementById("tax").innerHTML.replace("Rs.", "");
	const subTotal = document.getElementById("subTotal").innerHTML.replace("Rs.", "");
	const total = document.getElementById("total").innerHTML.replace("Rs.", "");
	const name = document.getElementById("customerName").value;
	const contact = document.getElementById("contactNo").value;
	const specialNotes = document.getElementById("specialNotes").value;
	const userId = localStorage.getItem("id");

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", API_HOST_URL + "/api/orders/create");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"name": name, "contact": contact, "taxAmount": tax, "subTotalAmount": subTotal, "totalAmount": total,
		"note": specialNotes, "modifiedBy": userId, "createdBy": userId
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

function onQtyChangeEvent(quantity, itemId, price, itemCount) {
	var total = (quantity * price);
	document.getElementById("total-cartQty" + itemId).innerHTML = "Rs." + total;

	var finalSubTotal = 0;
	for (let order of allOrders) {
		var qtyTotal = document.getElementById("total-cartQty" + order['id']).innerHTML.replace("Rs.", "");
		finalSubTotal += Number(qtyTotal);
	}
	document.getElementById("subTotal").innerHTML = "Rs." + finalSubTotal;

	var tax = (finalSubTotal / 100) * 5;  // 5% tax will be calculated
	document.getElementById("tax").innerHTML = "Rs." + tax;

	var total = finalSubTotal + tax;
	document.getElementById("total").innerHTML = "Rs." + total;

	addToSelectedOrders(itemId, quantity);
}

function addToSelectedOrders(orderId, quantity) {

	for (let order of allOrders) {
		if (order['id'] == orderId) {
			selectedOrders.push(order);
			break;
		}
	}

}