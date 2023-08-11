import express from "express";
import {getEnv, requireEnv} from "./env";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("dist"));


// Are we in production mode?
const PRODUCTION = getEnv("PRODUCTION") === "true";

// Development port 3000
// if production, please set PRODUCTION_PORT in the environment
const PORT = PRODUCTION ? parseInt(requireEnv("PRODUCTION_PORT")) : 3000;

// Catch-all route
app.route("*").all((req, res) => {
     res.sendFile("/index.html");
});

app.listen(PORT, () => {
    console.log("Server is listening at http://localhost:" + PORT);
});
