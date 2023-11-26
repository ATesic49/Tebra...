import prisma from "@/lib/PrismaClient"
import bcrypt from 'bcrypt'
import { setCookie } from "cookies-next"
import * as jose from 'jose'
import { cookies } from "next/headers"
export async function POST(req:Request){
    const {email,hashedPassword} = await req.json()
    console.log(email)
    const hpas= await bcrypt.hash(hashedPassword,10)
    try{
        const users= await prisma.user.findMany({})
        const emailNotUnique=async ()=>{
            let i = false
             await users.forEach(user=>{
            if(email as string==user.email as string){
                return i = true
            }   
            })
        return i
        }
        console.log(await emailNotUnique(),'asdada')
        if(await emailNotUnique()){
        const user =await prisma.user.findUnique({
            where:{
                email:email
            }
      
        })

        if(user){

            const verifiedUser = await bcrypt.compare(hashedPassword,user.password)
            if(verifiedUser){
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
     return new Response(JSON.stringify({message:'Pogresan Email ili Sifra'}))

            }
        }





        }else{
    return new Response(JSON.stringify({message:'Pogresan Email ili Sifra'}))





        }
    
        
    }catch(e){
        console.log(e)
        return new Response(JSON.stringify({message:"GRESKA"}))
    }


}