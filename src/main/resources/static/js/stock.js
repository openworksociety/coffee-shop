var jwt = localStorage.getItem("jwt");
if (jwt == null) {
	window.location.href = '/login';
}

const API_HOST_URL = "http://localhost:8085";

function loadTable(apiURL) {
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", API_HOST_URL + apiURL);
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
				trHTML += '<td>' + object['description'] + '</td>';
				trHTML += '<td>' + object['price'] + '</td>';
				trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + object['id'] + ')">Edit</button>';
				trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + object['id'] + ')">Del</button></td>';
				trHTML += "</tr>";
			}
			document.getElementById("mytable").innerHTML = trHTML;
		}
	};
}

loadTable("/api/products");

function showUserCreateBox() {
	Swal.fire({
		title: 'Create user',
		html:
			'<input id="id" type="hidden">' +
			'<input id="name" class="swal2-input" placeholder="Product Name">' +
			'<input id="description" class="swal2-input" placeholder="Decription">' +
			'<input id="price" type="number" min="0" class="swal2-input" placeholder="Price">',
		focusConfirm: false,
		preConfirm: () => {
			userCreate();
		}
	})
}

function userCreate() {
	const name = document.getElementById("name").value;
	const description = document.getElementById("description").value;
	const price = document.getElementById("price").value;
	const userId = localStorage.getItem("id");

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", API_HOST_URL + "/api/products/create");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"name": name, "description": description, "price": price,
		"avatar": "https://www.mecallapi.com/users/cat.png", "modifiedBy": userId, "createdBy": userId
	}));
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//			const objects = JSON.parse(this.responseText);
			//			Swal.fire(objects['message']);
			//			loadTable();

			Swal.fire({
				text: "Product Created Successfully",
				icon: 'success',
				confirmButtonText: 'OK'
			}).then((result) => {
				if (result.isConfirmed) {
					loadTable("/api/products");
				}
			});
		}
	};
}

function showUserEditBox(id) {
	console.log(id);
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", API_HOST_URL + "/api/products/" + id);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const object = JSON.parse(this.responseText);
			Swal.fire({
				title: 'Edit User',
				html:
					'<input id="id" type="hidden" value=' + object['id'] + '>' +
					'<input id="name" class="swal2-input" placeholder="Product Name" value="' + object['name'] + '">' +
					'<input id="description" class="swal2-input" placeholder="Description" value="' + object['description'] + '">' +
					'<input id="price" type="number"  min="0" class="swal2-input" placeholder="Price" value="' + object['price'] + '">',
				focusConfirm: false,
				preConfirm: () => {
					userEdit();
				}
			})
		}
	};
}

function userEdit() {
	const id = document.getElementById("id").value;
	const name = document.getElementById("name").value;
	const description = document.getElementById("description").value;
	const price = document.getElementById("price").value;
	const userId = localStorage.getItem("id");

	const xhttp = new XMLHttpRequest();
	xhttp.open("PUT", API_HOST_URL + "/api/products/update");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"id": id, "name": name, "description": description, "price": price, "modifiedBy": userId
	}));
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//			const objects = JSON.parse(this.responseText);
			//			Swal.fire(objects['message']);
			//			loadTable();

			Swal.fire({
				text: "Product Updated Successfully",
				icon: 'success',
				confirmButtonText: 'OK'
			}).then((result) => {
				if (result.isConfirmed) {
					loadTable("/api/products");
				}
			});
		}
	};
}

function userDelete(id) {
	const xhttp = new XMLHttpRequest();
	xhttp.open("DELETE", API_HOST_URL + "/api/products/delete/" + id);
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			//      const objects = JSON.parse(this.responseText);
			//      Swal.fire(objects['message']);
			//      loadTable();
			Swal.fire({
				text: "Product Deleted Successfully",
				icon: 'success',
				confirmButtonText: 'OK'
			}).then((result) => {
				if (result.isConfirmed) {
					loadTable("/api/products");
				}
			});
		}
	};
}

function showAllItems() {
	loadTable("/api/products/findAllDeactive");
}