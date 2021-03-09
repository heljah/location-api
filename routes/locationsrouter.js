const express = require('express');
const database = require("../database/crudrepository.js");


let locationsrouter = express.Router();


locationsrouter.get("/", async (req, res) => {
    try {
      let locations = await database.findAll();
      res.send(locations);
    } catch (err) {
      console.log(err);
    }
});

locationsrouter.get("/:urlId([0-9]+)", (req, res) => {
    const urlId = Number(req.params.urlId);
    res.json(database.findById(urlId));

});

locationsrouter.delete("/:urlId([0-9]+)", (req, res) => {
    const urlId = Number(req.params.urlId);
    const success = database.deleteById(urlId);
    console.log(success);
    if (success) {
        res.statusCode = 204;
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }

});

locationsrouter.post("/", (req, res) => {
    const location = database.save(req.body);
    if (location) {
        res.statusCode = 201;
        res.send(location);
    } else {
        res.statusCode = 404;
        res.end();
    }
});

module.exports = locationsrouter;
