import prisma from "@/lib/PrismaClient";

export async function GET(request:Request){
    const majice = await prisma.majica.findMany(
        {
            orderBy:[{
                name:'desc'
            }]
        }
    )


    return new Response(JSON.stringify(majice))
}