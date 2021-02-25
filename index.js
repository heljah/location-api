const express = require('express');
const app = express();
// Process.env tarvitaan Herokua varten!
const port = process.env.PORT || 3000;


let database = [
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
];

app.use(bodyParser.json());
app.set('json spaces', 4);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/locations', (req, res) => {
  res.json(database);
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

// Tämä luo selaimeen polun, jolla pääsen public-kansiooni!
app.use('/start', express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});