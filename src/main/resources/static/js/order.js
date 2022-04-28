var jwt = localStorage.getItem("jwt");
if (jwt == null) {
	window.location.href = '/login'
}

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