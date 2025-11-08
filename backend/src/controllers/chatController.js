import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req,res){
    try {

        // use clerkId to generate token (not mongodb id ) => it should match with stream user id  
        const token = chatClient.createToken(req.user.clerkId) ;

        res.status(200).json({
            token,
            userId:req.user.clerkId,
            userName:req.user.name,
            userImage:req.user.image
        })
    } catch (error) {
        console.error("❌ Error getting stream token:", error);
        res.status(500).json({msg:"Internal Server Error"});
    }
}