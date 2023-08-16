//1. import all dependecies
//express, create app with wxpress, .env (This is the New Way)
const express = require("express")
const app= express();
require('dotenv').config();


const port = process.env.PORT;  // imports the .env port file
//4.import mongoose.congig (after config is complete)
require("./configs/mongoose.config")

//2. configureexpress with app.use
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//5 import routes (after routes are done -- may need to complete the models & the backbone of the controller)

require("./routes/joke.routes")(app)

//3 Listen to the port at the end
app.listen(port, ()=>console.log(`Listening on port: 8000`));