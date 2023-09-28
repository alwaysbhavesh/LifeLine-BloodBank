const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url)    
const connection = mongoose.connection;

// verify the connection 
connection.on('connected' , () => {
    console.log('Mongo DB Connection Succesfull')
});

//verify conneciton error
connection.on('error' , (err) => {
    console.log('Mongo DB Connection error',err)
});