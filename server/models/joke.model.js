// 1. import mongoose
const mongoose = require('mongoose');

//2.1 create the schema with all the keys and validations
const JokeSchema = new mongoose.Schema({
    joke:{
        type: String,
        required: [true, "Joke Required"],  //Validation here
        minlength: [10, "Joke must be 10 characters long!"]
    },

    punchline:{
        type: String,
        required: [true, "Punchline Required"],  //Validation Here
        minlength: [3, "Punchline must be 3 characters long!"]
    },
}); //2.2 enable the time stamp for createdAt & updatedAt

//3. create a mongoose model based on the schema & export it

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;

