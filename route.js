const { Router } = require('express');
var express = require('express');
var route = express.Router();
var Movie = ('./Models/Movies')

//fetching data
Router.get('movies',async(req,res) => {
    const iMovie = await 
    Movie.find();
    res.send(iMovie);
})

//for posting data

