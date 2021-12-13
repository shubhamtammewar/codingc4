const express=require('express');
const mongoose=require('mongoose');
const userController=require('./src/controller/user.controller')
const app=express();
app.use("/user",userController);
module.exports=app;