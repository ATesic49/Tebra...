import prisma from "@/lib/PrismaClient";

export async function GET(){
    try{
    // const majice = await prisma.majica.findMany(
    //     {
    //         // orderBy:[{
    //         //     name:'desc'
    //         // }]
    //     }
    // )


    return new Response(JSON.stringify('majice'))
    }catch(e){
        console.log(e)
    return new Response(JSON.stringify({message:'greska'}))

    }

}