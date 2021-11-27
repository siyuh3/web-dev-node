const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
const deleteMovie = (req, res) =>
    dao.deleteMovie(req.params.id)
        .then((status) => res.send(status));


app.get('/hello', (req, res) =>{
    res.send('Hello World!(A8 server end)');
});
app.delete("/rest/movies/:id", deleteMovie);

const movieService = require("./service/movies-service")
const dao = require("./movies/dao");
movieService(app);
require('./service/tweeter-service')(app);
require('./service/profile-service')(app);
require('./movies/service')(app);
require('./service/who-service')(app);
const port = process.env.PORT || 4000;
app.listen(port);