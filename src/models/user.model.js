import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        requried:true,
        minLength:3,
maxLength:50


        },
        email:{
            type:String,
            requried:true,

        },
        passwordHash: {
            type:String,
            requried:true
        }
    })

    const userModel = mongoose.model("users", userSchema)

    export default userModel


