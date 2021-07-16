const http = require("http");
require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=45,-75`;

const req = http.request(url, res => {
	let data = "";

	res.on("data", chunk => {
		data = data + chunk.toString();
	});

	res.on("end", () => {
		console.log(JSON.parse(data));
	});
});

req.on("error", err => {
	console.log(err);
});
req.end();
