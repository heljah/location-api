
let counter = 0;
let database = [
    { id: counter++, latitude: 60, longitude: 70 },
    { id: counter++, latitude: 40, longitude: 80 },
    { id: counter++, latitude: 60, longitude: 80 },
];
  
const functions = {
    findAll: () => database,
    findById: (id) => database.find(item => item.id == id),
    deleteById: (id) => {
        if (database.find(item => item.id == id)) {
            database = database.filter(item => item.id != id)
            return true;
        } else {
            return false;
        }
    },
    save: (location) => {
        location.id = counter++;
        database.push(location);
        return location;
    }
};


module.exports = functions;