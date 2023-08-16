// 1. import the controller
    const JokeController = require("../controllers/joke.controller");


// 2. export a function that reads on argument (app)
module.exports = (app)=>{
    app.get("/api/testing", JokeController.apiTest); //test trial
    app.get("/api/jokes", JokeController.allJokes); //get all jokes
    app.get("/api/jokes/:id", JokeController.oneJoke); //get one joke by id
    app.post("/api/jokes", JokeController.addJoke);  //add new joke
    app.patch("/api/jokes/:id", JokeController.updateJoke);  //update joke
    app.delete("/api/jokes/:id", JokeController.deleteJoke); //delete joke
}


//3.include allthe routes with the corresponding logics from the controller