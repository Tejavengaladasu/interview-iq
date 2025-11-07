import app from "./app.js";
import {ENV} from "./lib/env.js";

// server start
app.listen(ENV.PORT, () => {
    console.log("Server running on port",ENV.PORT);
})