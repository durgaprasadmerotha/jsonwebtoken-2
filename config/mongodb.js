const mongoose = require('mongoose')


function connectTodb() {
    mongoose.connect("mongodb://0.0.0.0/testDb")
    .then(() => {
        console.log("connecting to database");
        
    })
    .catch(err => {
        console.log("Error connecting to database". err);
        
    })
}

module.exports = connectTodb;