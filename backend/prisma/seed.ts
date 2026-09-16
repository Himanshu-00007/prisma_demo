import {prisma} from "../db_init.js"

async function seed(){
    await prisma.user.createMany({
        data:[
            {name:"Aman",email:"aman@gmail.com"},
            {name:"Raj",email:"raj@gmail.com"},
        ]
    })
}
seed().then(()=>prisma.$disconnect());