//first pull out core modules
const path = require('path');

// then pull out npm modules
const express = require('express'); // this is a funiton itself

const app = express(); // we just call the express constructor with out any param


const publicDir = path.join(__dirname, '../public');
//this for serving static html file using path module
app.use(express.static(publicDir))


// get() takes two params, first route, second a function for what to do when its called

app.get('/', (req,res)=>{
    res.send('<h1>Weather</h1>');//this route will never gonna execute, because express.static() is overriding the call
})

// app.get('/help', (req, res)=>{
//     res.send({
//         name: 'Alif',
//         age: 25,
//         email: 'a@.com'
//     });
// })

app.get('/about', (req, res)=>{
    res.send('<h1>About</h1>');
})

app.get('/weather', (req,res)=>{
    res.send({
        forecast: "Its cloudy",
        location: "Charlottetown"
    });
})

app.listen(3000, ()=>{
    console.log('Server is up and running on port 3000.');
})
