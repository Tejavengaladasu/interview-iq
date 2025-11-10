import {StreamChat} from "stream-chat";
import {StreamClient} from "@stream-io/node-sdk";
import {ENV} from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("❌ Stream API key or secret is not defined in environment variables");
}

export const chatClient = StreamChat.getInstance(apiKey,apiSecret); // this is for chat features 
export const streamClient =new StreamClient(apiKey,apiSecret); // this will be used for video call

export const upsertStreamUser  = async(userData)=>{
    try {
        await chatClient.upsertUser(userData);
        console.log("✅ Stream user upserted successfully",userData);
    } catch (error) {
        console.error("❌ Error upserting stream user:", error);
    }
}

export const deleteStreamUser  = async(userId)=>{
    try {
        await chatClient.deleteUser(userId);
        console.log("✅ Stream user deleted successfully",userId);
    } catch (error) {
        console.error("❌ Error deleting stream user:", error);
    }
}

//todo: add other stream functions to generate token