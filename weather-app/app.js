const request = require("postman-request");
const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast");

require("dotenv").config();

const address = process.argv[2];

if (address) {
	geocode(address, (err, { latitude, longitude, location } = {}) => {
		if (err) {
			return console.log(err);
		}

		forcast(
			latitude,
			longitude,
			(error, { description, temperature, feels_like } = {}) => {
				if (error) return console.log(error);
				const ans = {
					location: location,
					weather: description,
					temperature: temperature,
					feels_like: feels_like,
				};

				console.log(ans);
			}
		);
	});
} else console.log("Please pass the location name.");
