// 1. import the model
const Joke = require("../models/joke.model")

// 2. export all the functions with the placholder
module.exports.apiTest = (req, res) =>{
    res.json({message: "ok"})
}




//Example:
module.exports.allJokes = (req, res) =>{
//Code here to make sure everything is intalled correct type Joke. and if the find icon pop up everything is good to go
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.oneJoke = (req, res) =>{
    //Code here
    Joke.find({ _id: req.params.id })
        .then(oneJoke => {
            res.json({joke: oneJoke})
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.addJoke = (req, res) =>{
    //Code here
    Joke.create(req.body)
        .then(addNewJoke => {
            res.json({joke: addNewJoke})
        })
        .catch((err) => {
            res.json(err)
        });

}

module.exports.updateJoke = (req, res) =>{
    //Code here
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke=> {
            res.json(  updatedJoke )
        })
        .catch((err) => {
            res.json(err)
        });
    
}

module.exports.deleteJoke = (req, res) =>{
    //Code here
    Joke.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json(err)
    });
}