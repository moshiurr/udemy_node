console.log("Client side javascript is loaded");

fetch("http://localhost:3000/weather?address=badda").then(response => {
	response.json().then(data => {
		if (data.error) console.log(data.error);
		else {
			console.log(data);
		}
	});
});
