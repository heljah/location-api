const express = require('express');
const app = express();
// Process.env tarvitaan Herokua varten!
const port = process.env.PORT || 3000;
let locationsrouter = express.Router();

// Tämä luo selaimeen polun, jolla pääsen public-kansiooni!
app.use('/start', express.static('public'));

locationsrouter("/", (req, res) => {
    res.json(database);
})

locationsrouter("/1", (req, res) => {
    console.log("Fetching only one row where id = 1")
})

app.get('/api/locations', locationsrouter);


let database = [
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
];

app.set('json spaces', 40);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});