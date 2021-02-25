const express = require('express');
const app = express();
// Process.env tarvitaan Herokua varten!
const port = process.env.PORT || 3000;
let locationsrouter = express.Router();

// Tämä luo selaimeen polun, jolla pääsen public-kansiooni!
app.use(express.static('public'));

locationsrouter.get("/", (req, res) => {
    res.json(database);
})

locationsrouter.get("/1", (req, res) => {
    res.json(database[1]);
})

app.use('/api/locations', locationsrouter);


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