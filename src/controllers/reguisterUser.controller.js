const resguisterUser=[]
const User=require('../models/user');

resguisterUser.getData=async(req,res)=>{
   const {name,email,password}=req.body;
   const newUser=new User({name,email,password});
   await newUser.save();
   res.send(newUser+'\nUser reguistred!');
   console.log(newUser+'\nUser reguistred!');
}

module.exports=resguisterUser;