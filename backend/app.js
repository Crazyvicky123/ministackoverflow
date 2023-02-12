require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const bodyParser = require("body-parser");

const cors = require("cors");
const router = require("./router/router");


app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
app.use(express.json());
app.use(cors());
app.use(router);

const port=process.env.port || 8005;
if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"))
}


app.listen(port,()=>{
    console.log(`server is running on the port${port}`);
})
