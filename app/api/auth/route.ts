import prisma from "@/lib/PrismaClient"
import bcrypt from 'bcrypt'

export async function POST(req:Request){
    const {email,hashedPassword,adresa,brtel} = await req.json()
    const hpas= await bcrypt.hash(hashedPassword,10)
    try{

        const user =await prisma.user.create({
            data:{
                email:email,
                password:hpas,
                kupovine:[],
                adresa:adresa,
                brtel:brtel
                
            }
        })
    return new Response(JSON.stringify(user))
        
    }catch(e){
        return new Response(JSON.stringify({success:false}),{status:500})

    }


}