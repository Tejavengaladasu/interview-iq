import express from "express";
import {ENV} from "./lib/env.js";
import path from "path";

// express config
const app = express();

// path config for static files
const __dirname = path.resolve();

// default route handler
app.get("/health", (req, res) => {
    res.status(200).json({msg: "Api is up and running!"});
})

app.get("/books", (req, res) => {
    res.status(200).json({msg: "Api is up and running! on books route"});
})

// make our app ready for deployment and serve static files in production
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    })
}

// server start
app.listen(ENV.PORT, () => {
    console.log("Server running on port",ENV.PORT);
})