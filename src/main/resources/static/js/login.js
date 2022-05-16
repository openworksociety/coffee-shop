var jwt = localStorage.getItem("jwt");
if (jwt != null) {
	window.location.href = '/index'
}
const API_HOST_URL = "http://localhost:8085";

function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", API_HOST_URL + "/api/login");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"username": username,
		"password": password
	}));
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			const objects = JSON.parse(this.responseText);
			console.log(objects);
			if (objects['valid'] == true) {
				localStorage.setItem("jwt", objects['username']);
				localStorage.setItem("id", objects['id']);
				Swal.fire({
					text: objects['message'],
					icon: 'success',
					confirmButtonText: 'OK'
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = '/index';
					} else {
						localStorage.removeItem("jwt");
					}
				});
			} else {
				Swal.fire({
					text: objects['message'],
					icon: 'error',
					confirmButtonText: 'OK'
				});
			}
		}
	};
	return false;
}