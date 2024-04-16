const TodoModel=require("../models/Todo");

exports.getTodo=async(req,res)=>{
    const todo=await TodoModel.find()
    res.send(todo)
}



exports.saveTodo=async(req,res)=>{
    try {
        const{toDo}=req.body;

    const response=await TodoModel.create({toDo});
    
    res.status(200).json({
        success:true,
        data:response,
        message:"Entry Created",
    })
    } catch (error) {
        console.error(error);
        console.log(error);

        res.status(500).json({
            success:false,
            message:"failed to create Entry",
            data:"internal server error",
        })

        
    }
}

exports.deleteTodo=async(req,res)=>{
    try {
        const{id}=req.params;
        

        const response= await TodoModel.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            data:response,
            message:"Deleted successfully",
        })

    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"couldn't delete this item"
        })
        
    }
}

exports.updateTodo=async(req,res)=>{
    try {
        const{id}=req.params;
        const{toDo}=req.body;

        const response= await TodoModel.findByIdAndUpdate(
            id,
            {toDo},
        )
        res.status(200).json({
            success:true,
            data:response,
            message:"updated successfully",
        })

    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"couldn't update this item"
        })
        
    }
}