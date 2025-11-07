import express from "express";
import {ENV} from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import {inngest, functions} from "./lib/inngest.js";
// express config
const app = express();

// path config for static files
const __dirname = path.resolve();

// middlewares
app.use(express.json());

// creadentials true meaning => server allows a browser to send cookies on a cross-origin request
app.use(cors({origin:ENV.CLIENT_URL, credentials: true}));

app.use("/api/inngest",serve({client:inngest,functions}));


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

const startServer = async ()=>{
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log("Server running on port",ENV.PORT);
        })

    } catch (error) {
        console.error("💥 Error starting server:", error);
    }
}

startServer();

