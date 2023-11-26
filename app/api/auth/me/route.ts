import { getCookie } from "cookies-next";
import * as jose from 'jose'
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import prisma from "@/lib/PrismaClient";
export  async function POST(req:Request){
const token =cookies().get('token') 
if(token){

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
try{
await jose.jwtVerify(token.value,secret)

const payload = jwt.decode(token.value)
            //@ts-ignore
const user =await prisma.user.findUnique({
    where:{
        // @ts-ignore
        email:payload.email

    }
})
return new Response(JSON.stringify(user))
}catch(e){
console.log(e,'eeee')
return new Response(JSON.stringify('Ne radi nesto.'))
}
}else{
    return new Response(JSON.stringify({token:'no Token'}))
}
// const secret = new TextEncoder().encode(process.env.JWT_SECRET)
// try{
// await jose.jwtVerify(token,secret)


// }catch(e){
// console.log(e,'eeee')
// return new Response(JSON.stringify('Ne radi nesto.'))
// }
// return new Response(JSON.stringify('userEmail'))

}