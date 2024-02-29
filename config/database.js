const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Connection succesfull")})
    .catch((error)=>
    {
    console.log("Recieved an error",error)
    //iska mtlp find out krna hai 
    process.exit(1);
    })

}
module.exports = dbConnect;