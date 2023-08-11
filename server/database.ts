import mongoose from "mongoose";
import {requireEnv} from "./env";

export default function config() {
    const uri = requireEnv("DB_URI");
    mongoose.connect(uri)
        .then(() => console.log("connected to database."))
        .catch(err => console.error("error connecting to database:", err));
}
