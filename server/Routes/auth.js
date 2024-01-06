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

    const token = jwt.sign({id: user._id},"Secret Key");
    res.cookie("token",token);
    return res.json({message:"user login " , id: user._id})

})

//logout the user

router.get('/logout',  (req,res) => {
    res.clearCookie('token')
    return res.json({message:"token removed"})
})


module.exports = router