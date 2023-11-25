import Swipper from "./components/Swiper";
import Izlog from "./components/Izlog";
import prismaClient from "@/lib/PrismaClient";
export default async function Home() {
  const majice = await prismaClient.majica.findMany({
    include: {
      velicina: {
        include: {
          boje: true
        }
      }
    }
  })
  console.log(majice[0])
  return (
    <main>

      <Swipper />
      <Izlog majice={majice} />
    </main>
  );
}
