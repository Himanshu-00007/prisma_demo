import {prisma} from "./db_init.js"
import express from "express"
const app=express();
app.use(express.json());
const port=8000;



app.get("/users",async (req,res)=>{
    const users=await prisma.user.findMany({
        where:{
            AND:[{id:{gt:4}},{name:"Himanshu"}]
        }
    });
    res.json(users);
})


app.put("/update",async(req,res)=>{
    const updatedUser=await prisma.user.update({
        where:{email:"something@gmail.com"},
        data:{
            name:"something"
        }
    })
    res.json(updatedUser);
})

app.listen(port,()=>{
    console.log("server is listening");
})
