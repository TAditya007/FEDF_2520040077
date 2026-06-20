document.getElementById("registerForm").addEventListener("submit", function (e) {
	e.preventDefault();

	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const contact = document.getElementById("contact").value.trim();

	if (name !== "" && email !== "" && contact !== "") {
		alert("Registration Successful");
	} else {
		alert("Please fill in the required fields.");
	}
});
