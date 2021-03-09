const mysql = require('mysql');
const config = require('./database/mariadbconf');

const connection = mysql.createConnection(config);

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            // Make SELECT * from locations query
            // If errors were found, call reject function. 
            // If no errors, call resolve with the locations array fetched
            // from the array.
        });
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {

        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {

        });
    },
    save: (location) => {
        return new Promise((resolve, reject) => {

        });
    },
    updateOrCreate: (location, id) => {
        return new Promise((resolve, reject) => {

        });
    },
    update: (location, id) => {
        return new Promise((resolve, reject) => {

        });
    },
};