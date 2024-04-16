const express=require("express");
const router=express.Router();

const {getTodo,saveTodo,deleteTodo,updateTodo} =require("../controllers/todoControllers")

router.get("/get",getTodo);
router.post("/save",saveTodo);
router.delete("/delete/:id",deleteTodo);
router.put("/update/:id",updateTodo);

module.exports=router;