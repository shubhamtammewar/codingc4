const express=require('express');
const mongoose=require('mongoose');
const connect=require('./src/config/db');
const app=express();
app.listen(5656,async function (req,res) {
    await connect();
    console.log("listening on port 5656");
})
