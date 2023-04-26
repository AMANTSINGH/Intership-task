// express is required
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
// const user = require('./model/userSchema');

app.use(express.json());
app.use(cors());

app.use(require('./router/auth'));
// const DB =`mongodb+srv://admin:admin%40webshark@cluster0.mdurdqc.mongodb.net/onroadprice?retryWrites=true&w=majority`;
const PORT = process.env.PORT

// Middleware
const middleware = (req, res, next) =>{
    console.log(`Middleware`);
    next();
}


app.listen(PORT, ()=>{
    console.log(`server is running at port no ${PORT}`);
})

// console.log(`Sucess`);