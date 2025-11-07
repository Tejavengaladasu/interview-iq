import express from "express";
import {ENV} from "./lib/env.js";

// express config
const app = express();

// default route handler
app.get("/health", (req, res) => {
    res.status(200).json({msg: "Api is up and running!"});
})

// server start
app.listen(ENV.PORT, () => {
    console.log("Server running on port",ENV.PORT);
})