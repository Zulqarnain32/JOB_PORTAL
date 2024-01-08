const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:"String"
    },
    email:{
        type:"String"
    },
    password:{
        type:"String"
    },
    role:{
        type:String,
        default:"user"
    }
})

const UserModel = mongoose.model('UserModel',UserSchema)
module.exports = UserModel