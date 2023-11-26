import { cookies } from "next/headers";

export async function GET(){
    try{

        await cookies().delete('token')
        return new Response(JSON.stringify({status:'Success'}))

    }catch(e){
        console.log(e)
        return new Response(JSON.stringify({status:'something failed'}))
    }
}