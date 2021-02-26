const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
// Process.env tarvitaan Herokua varten!
const port = process.env.PORT || 3000;
const locationsrouter = require('./routes/locationsrouter');

// Tämä luo selaimeen polun, jolla pääsen public-kansiooni!
app.use(express.static('public'));

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.body);
    if (req.method === "POST") {
        const location = req.body;
        if (location.latitude && location.longitude) {
            const latitude_ok = location.latitude >= -90 && location.latitude <= 90
            const longitude_ok = location.longitude >= -180 && location.longitude <= 180
            if (latitude_ok && longitude_ok) {
                next();
            } else {
                res.send(400);
                res.end();
            }
        }
    } else {
        next();
    }
});

app.use('/api/locations', locationsrouter);

app.set('json spaces', 40);

/* app.get('/', (req, res) => {
  res.send('Hello World!');
}); */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});