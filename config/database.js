const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    }).then(()=>console.log("db connected successfully"))
    .catch((err)=>console.log("error occured in db connection"));
}

module.exports=dbConnect;