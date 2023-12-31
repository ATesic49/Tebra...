import prisma from "@/lib/PrismaClient"
import bcrypt from 'bcrypt'
import { setCookie } from "cookies-next"
import * as jose from 'jose'
import { cookies } from "next/headers"
export async function POST(req:Request){
    const {email,hashedPassword,adresa,brtel} = await req.json()
    console.log(email)
    const hpas= await bcrypt.hash(hashedPassword,10)
    try{
        const users= await prisma.user.findMany({})
        const emailUnique=async ()=>{
            let i = true
             await users.forEach(user=>{
            if(email as string==user.email as string){
                return i = false
            }   
            })
        return i
        }
        console.log(await emailUnique(),'asdada')
        if(await emailUnique()){
        const user =await prisma.user.create({
            data:{
                email:email,
                password:hpas,
                kupovine:[],
                adresa:adresa,
                brtel:brtel
                
            }
        })
        const alg='HS256'
        const secret=new TextEncoder().encode(process.env.JWT_SECRET)
        const token =await new jose.SignJWT({email:user.email}).setProtectedHeader({alg})
        .setExpirationTime('24h').sign(secret)
        cookies().set('token',token,
        {
            path:'/',
            maxAge:60*60*24*6
    }
        )
        //   setCookie('token',token,{res:new Response(),req,maxAge:60*60*24*6})
    return new Response(JSON.stringify({message:'Dobrodosao Tebra!'}))
        }else{
    return new Response(JSON.stringify({message:'Vec postoji korisnik sa ovakvim emailom!'}))





        }
    
        
    }catch(e){
        console.log(e)
        return new Response(JSON.stringify({message:"GRESKA"}))
    }


}