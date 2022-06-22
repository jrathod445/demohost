var express = require('express')
var router = express.Router();
var movie = require('./Model/movie')

router.get('/movies',async(req,res)=>{
    var imovie = await movie.find();
    res.send(imovie)
    // res.sendFile("index.html",{root:__dirname});
})

module.exports = router;