const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../model/UserSchema')

//register the user

router.post('/register', async (req,res) => {
    const { name,email,password } = req.body;
    if(!name || !email || !password){
        return res.json({message:"please fil all fields"})
    }
    const user = await UserModel.findOne({email})
    if(user){
        return res.json({message:"email already exist"})
    }
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = new UserModel({name,email,password:hashPassword})
    await newUser.save()
    return res.json({message:"user register successfully"})
})

// login the user

router.post('/login' , async (req,res) => {
    const { email,password } = req.body;
    if( !email || !password){
        return res.json({message:"please fil all fields"})
    }
    const user = await UserModel.findOne({email})
    if(!user){
        return res.json({message:"email not found"})
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.json({message:"incorrect password"})
    }

    const token = jwt.sign({ id: user._id, role: user.role }, "Secret Key");

    res.cookie("token",token);
    return res.json({message:"logined",id:user._id, role:user.role})
})

//? admin panel 
  
//Dashboard
const verifyUser = (req,res,next) => {
    const token = req.cookies.token;
    
// In the verifyUser middleware
console.log("Token Received:", token);
    if(!token){
       console.log("token is mising");
       return res.json("token is missing")
    } else {
        jwt.verify(token,"Secret Key", (err,decoded) => {
            if(err){
                console.log("token error");
                return res.json("error with token")
            } else{ 
                console.log("Decoded:", decoded);
            if(decoded.role == "admin"){
               console.log("this is  admin ");
                next();
            } else {
                console.log("not admin");
                return res.json("not admin")
            }
        }
       })
        
    }
  }
  
  router.get('/dashboard', verifyUser, (req,res) => {
    res.json("succeed")
  })

//logout the user

router.get('/logout',  (req,res) => {
    res.clearCookie('token')
    return res.json({message:"token removed"})
})


module.exports = router