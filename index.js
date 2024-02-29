const express = require("express");
const app = express();

//load and config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes=require("./routes/todos");
//mount the todo ASPI routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server started succesfully at ${PORT}`);
})

//connect to the database
const dbConnect = require('./config/database');
dbConnect();

//default route
app.get("/",(req,res)=>
{
    res.send(`<h1>THIS IS HOME PAGE</h1>`);
})
