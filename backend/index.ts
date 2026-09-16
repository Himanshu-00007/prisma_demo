import {prisma} from "./db_init.js"
import express from "express"
const app=express();
app.use(express.json());
const port=8000;



app.get("/users",async (req,res)=>{
    const users=await prisma.user.findFirst();
    res.send(users);
})


app.listen(port,()=>{
    console.log("server is listening");
})
