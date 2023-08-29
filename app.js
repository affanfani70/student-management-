const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotEnv = require("dotenv");
const connectDB = require("./Server/database/connection");


// setting port env
dotEnv.config({path:"config.env"});
const port = process.env.PORT || 8080;

// connect to database
connectDB();

// inisitaiting the app 
const app = express();

// setting morgan 
app.use(morgan('tiny'))

// setting body parser
app.use(bodyParser.urlencoded({extended:true}));

// setting strict files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + "public/css"))
app.use('/img',express.static(__dirname + "public/img"))
app.use('/js',express.static(__dirname + "public/js"))

// setting views Engine
app.set('view engine', 'ejs')

// loading the router 
const route = require("./Server/routes/router");
app.use('/',route)

// app listen at at port
app.listen(port,()=>{
    console.log("app is running at port 3000....")
})
