import express,{ Application, Request,Response } from "express";
import dotenv from "dotenv";
import {connectDb} from "./config/config";

import cors from "cors";
const app:Application=express();
dotenv.config();
app.use(cors());
const port = process.env.PORT;
connectDb();
app.use(express.json());

app.get("/",(req:Request,res:Response) => res.send("Hello"))

app.listen(port,()=>{
    console.log(`Port listen ${port}`); 
});