import express,{ Application, Request,Response } from "express";
import dotenv from "dotenv";
import {connectDb} from "./config/config";
import router from './router/router'; 
import cors from "cors";

const app:Application=express();
dotenv.config();
app.use(cors());
const port = process.env.PORT;
connectDb();
app.use(express.json());
app.use('/api',router);


app.listen(port,()=>{
    console.log(`Port listen ${port}`); 
});