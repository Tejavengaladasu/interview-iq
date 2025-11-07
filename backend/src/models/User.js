import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profileImage:{
        type: String,
        default:""
    },
    clerkId:{
        type: String,
        required: true,
        unique: true
    }
    // password: {
    //     type: String,
    //     required: true
    // } 
},{timestamps: true}); // timestamps: true will add createdAt and updatedAt fields

const User = mongoose.model("User",userSchema);

export default User;