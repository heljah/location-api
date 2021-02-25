const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Tämä luo selaimeen polun, jolla pääsen public-kansiooni!
app.use('/start', express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});