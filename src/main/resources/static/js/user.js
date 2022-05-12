var jwt = localStorage.getItem("jwt");
if (jwt == null) {
	window.location.href = '/login'
}

const API_HOST_URL = "http://localhost:8085";

function loadTable() {
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", API_HOST_URL + "/api/users");
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			var trHTML = '';
			const objects = JSON.parse(this.responseText);
			for (let object of objects) {
				trHTML += '<tr>';
				trHTML += '<td>' + object['id'] + '</td>';
				trHTML += '<td><img width="50px" src="' + object['avatar'] + '" class="avatar"></td>';
				trHTML += '<td>' + object['fname'] + '</td>';
				trHTML += '<td>' + object['lname'] + '</td>';
				trHTML += '<td>' + object['username'] + '</td>';
				trHTML += '<td>' + object['password'] + '</td>';
				trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + object['id'] + ')">Edit</button>';
				trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + object['id'] + ')">Del</button></td>';
				trHTML += "</tr>";
			}
			document.getElementById("mytable").innerHTML = trHTML;
		}
	};
}

loadTable();

function showUserCreateBox() {
	Swal.fire({
		title: 'Create user',
		html:
			'<input id="id" type="hidden">' +
			'<input id="fname" class="swal2-input" placeholder="First">' +
			'<input id="lname" class="swal2-input" placeholder="Last">' +
			'<input id="username" class="swal2-input" placeholder="Username">' +
			'<input id="password" class="swal2-input" placeholder="Password">',
		//			'<input id="email" class="swal2-input" placeholder="Email">',
		focusConfirm: false,
		preConfirm: () => {
			userCreate();
		}
	})
}

function userCreate() {
	const fname = document.getElementById("fname").value;
	const lname = document.getElementById("lname").value;
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	//	const email = document.getElementById("email").value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", API_HOST_URL + "/api/users/create");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"fname": fname, "lname": lname, "username": username, "password": password,
		"avatar": "https://www.mecallapi.com/users/cat.png"
	}));
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//			const objects = JSON.parse(this.responseText);
			//			Swal.fire(objects['message']);
			loadTable();
		}
	};
}

function showUserEditBox(id) {
	console.log(id);
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", API_HOST_URL + "/api/users/" + id);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const user = JSON.parse(this.responseText);
			console.log(user);
			Swal.fire({
				title: 'Edit User',
				html:
					'<input id="id" type="hidden" value=' + user['id'] + '>' +
					'<input id="fname" class="swal2-input" placeholder="First" value="' + user['fname'] + '">' +
					'<input id="lname" class="swal2-input" placeholder="Last" value="' + user['lname'] + '">' +
					'<input id="username" class="swal2-input" placeholder="Username" value="' + user['username'] + '">' +
					'<input id="password" class="swal2-input" placeholder="Password" value="' + user['password'] + '">',
				// '<input id="email" class="swal2-input" placeholder="Email" value="'+user['email']+'">',
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
	const fname = document.getElementById("fname").value;
	const lname = document.getElementById("lname").value;
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	//const email = document.getElementById("email").value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("PUT", API_HOST_URL + "/api/users/update");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"id": id, "fname": fname, "lname": lname, "username": username, "password": password,
		"avatar": "https://www.mecallapi.com/users/cat.png"
	}));
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//      const objects = JSON.parse(this.responseText);
			//      Swal.fire(objects['message']);

			Swal.fire({
				text: "User Updated Successfully",
				icon: 'success',
				confirmButtonText: 'OK'
			}).then((result) => {
				if (result.isConfirmed) {
					loadTable();
				}
			});
		}
	};
}

function userDelete(id) {
	const xhttp = new XMLHttpRequest();
	xhttp.open("DELETE", API_HOST_URL + "/api/users/delete/" + id);
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			//			const objects = JSON.parse(this.responseText);
			//			Swal.fire(objects['message']);
			//			loadTable();

			Swal.fire({
				text: "User Deleted Successfully",
				icon: 'success',
				confirmButtonText: 'OK'
			}).then((result) => {
				if (result.isConfirmed) {
					loadTable();
				}
			});
		}
	};
}