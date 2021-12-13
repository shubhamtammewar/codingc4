const express=require('express');

const upload=require('../config/upload');
const User = require('../models/user.model');
const router=express.Router();
// router.post("",upload.single("profileImage"),async (req,res)=>{
//     try {
     
//         const user=await User.create({
//             name:req.body.name,
//             email:req.body.email,
//             password:req.body.password,
//             profile_photo_url:req.file.path
//         })
//         return res.send({user})
//     } catch (e) {
//         res.status(200).send({error:e.message});
//     }
// })
module.exports=router;