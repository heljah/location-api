





// An api without database:
/* const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
// Process.env tarvitaan Herokua varten!
const port = process.env.PORT || 3000;
const locationsrouter = require('./routes/locationsrouter');

// Tämä luo selaimeen polun, jolla pääsen public-kansiooni!
app.use(express.static('public'));

app.use(express.json());

app.post(
    '/api/locations',
    // Latitude must be between -60 and 60
    body('latitude') >= -60 && body('latitude') <= 60,
    // Longitude must be between -180 and 180
    body('longitude') >= -180 && body('longitude') <= 180,
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
  
        location.create({
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        }).then(location => res.json(location));
    },
);

app.use('/api/locations', locationsrouter);

app.set('json spaces', 40);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}); */