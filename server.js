const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();

const cors=require("cors")

const app=express();

const PORT=process.env.PORT || 3000


// middleware-to handle cross origin request
app.use(cors());
app.use(express.json())

app.listen(PORT,()=>{
    `listening at ${PORT}...`
})

// const dbConnect=require("./config/database");
// dbConnect();



mongoose.connect('mongodb+srv://arvindsh8920:3w65RWuHAwGtGSeH@cluster0.tgcn9ll.mongodb.net/',{
    useNewUrlParser:true,
    UseUnifiedTopology:true,
}).then(()=>console.log("db connected successfully"))
.catch((err)=>console.log("error occured in db connection"));

const routes=require("./routes/todoRoutes");
app.use("/api",routes);

app.get("/",(req,res)=>{
    res.send("hihh...");
})