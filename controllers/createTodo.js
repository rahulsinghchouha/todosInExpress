//import the model
const Todo = require('../models/Todoo'); 

//define route handler
exports.createTodo = async(req,res) =>{
    try{
        //extract title and description from request body
        const{title,description}=req.body;
        //create a new todo object and insert in db 
        const response=await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created succesfully'
        }
        )


    }
    catch(err)
    {
        console.log(err);
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error hai",
            message:err.message,
        })

    }
}