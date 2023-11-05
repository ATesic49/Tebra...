import Image from "next/image";
import Navbar from "./components/Navbar";
import Swipper from "./components/Swiper";
import Izlog from "./components/Izlog";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Swipper />
      <Izlog />
    </main>
  );
}
