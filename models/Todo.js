const mongoose=require("mongoose");

const todoSchema=mongoose.Schema({
    toDo:{
        type:String,
        required:true,
        maxLength:50,
    }
    // description:{
    //     type:String,
    //     required:true,
    //     maxLength:50,
    // }

});

module.exports= new mongoose.model("Todo",todoSchema);

