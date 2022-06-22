var express = require('express')
var bodyparser = require('body-parser')
var mongoose = require('mongoose')
var router = require('./route')

mongoose.connect("mongodb+srv://fenilbabariya:410mongo@cluster0.ttnszx3.mongodb.net/movie?retryWrites=true&w=majority").then(()=>{
    console.log("DB Connected");

    var app = express();
    app.use(bodyparser.urlencoded({extended:false}))
    app.use(express.json())
    app.use('/api',router);

    app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
    })

}).catch((err)=>{
    console.log(err)
})