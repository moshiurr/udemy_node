const request = require('postman-request');
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');

require('dotenv').config();

// const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=46.238888,-63.129166`;

// request({url: url, json: true},(err,res)=>{
//     if(err) console.log(err);
//     console.log(res.current);
// })

// const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiZWR3aW4tIiwiYSI6ImNrcjR5aDFtYjMwNGIycHFoMTVodzF0NHMifQ.2O3FNFL_3p8mzxsXrpg1Xg";

// request({url:geoURL, json: true},(err,res)=>{
//     if(err) console.log("Unable to connect to server");
//     else{
//         if(res.body.features.length === 0) console.log("Unable to find location. Try anther search");
//         else{
//             const place = res.body.features[0].place_name;
//             const lat = res.body.features[0].center[0];
//             const lon = res.body.features[0].center[1];
//             console.log(place,lat,lon);
//         }
//     }
// })

const address = process.argv[2];

if(address){
    geocode(address, (err,data)=>{
        if(err){
            return console.log(err);
        }
    
        forcast(data.latitude, data.longitude, (error,res)=>{
            if(error) return console.log(error);
            const ans = {
                location: data.location,
                weather: res.description,
                temperature: res.temperature,
                feels_like: res.feels_like
            }
    
            console.log(ans);
        })
    })
}else console.log("Please pass the location name.")



