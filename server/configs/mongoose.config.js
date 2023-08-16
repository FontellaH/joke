//1. import mongoose
require('dotenv').config();
const mongoose = require('mongoose');

// 2. create a uri that shows my connection the the uri... which is in the .env file line 5.... change password to my actual pw and add destinationdb

//2.1 Make sure i use .env for the sensitive information
//2.2 Make sure i console.log and check of the route is good before i start coding

const uri = process.env.URI

console.log(uri)


//3. connecting the db check my server in terminal
    mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


//3.1 another way to do it if the uri is not working
// const username = process.env.ATLAS_USERNAME;
// const pw = process.env.ATLAS_PASSWORD;
// mongoose.connect(`mongodb+srv://${username}:${pw}@cluster0.zknhaur.mongodb.net/destinationdb?retryWrites=true&w=majority`)
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));


// check the code from the platform
//i may nedd to fo to Atlas to update the IP address






