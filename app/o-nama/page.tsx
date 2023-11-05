import React from "react";
import Image from "next/image";
import styles from "../../public/css/o-nama/page.module.css";
import Swipeer from "./components/Swiper";
export default function page() {
  return (
    <>
      <div className={styles.oNama}>
        <div className={styles.gore}>
        <div className={styles.naslov}>
          <h1>O Nama</h1>
        </div>
    <Image fill alt="background" 
    objectFit="cover" objectPosition="center" src={'/imgs/slika3.jpg'}></Image>

        </div>
        <h2>
          Ko je <span>Tebra?</span>
        </h2>
        <div className={styles.grid}>
          <div className={styles.image}>
            <Image
              src="/imgs/staki.jpg"
              fill
              alt="Slika3"
              objectFit="cover"
              objectPosition="0 40%"
            />
          </div>
          <p>
                  Relja Nikolic, poznatiji kao "Stakor," je istinska zvezda u svetu dizajna majica. Njegovi uspesi u ovoj oblasti su toliko izvanredni da su ga prepoznali kao jednog od najtalentovanijih mladih dizajnera. Relja je ucenik pete gimnazije i istrazuje svet umetnosti i dizajna sa strascu koja je neuporediva.
        <br />
        <br />
          Njegova sposobnost da stvori majice koje istovremeno odišu kreativnoscu i originalnoscu je zaista impresivna. Svaka njegova kreacija nosi pecat jedinstvenog stila i pazljivog odabira detalja. Majice koje dizajnira postale su prava modna ikona, omiljene medju ljudima koji zele da izraze svoju licnost i stil kroz svoju odecu.

          <br />
          <br />
          </p>
        </div>
<div className={styles.galerija}>
<h2>Galerija:</h2>
<div className={styles.swiperContainer}>

<Swipeer/>
</div>
</div>


        <h2>
          Nasa <span>Misija.</span>
        </h2>
        <div className={styles.grid}>
         
          <p>
        Relja Nikolić, poznatiji kao "Stakor," je istinska zvezda u svetu dizajna majica. Njegovi uspesi u ovoj oblasti su toliko izvanredni da su ga prepoznali kao jednog od najtalentovanijih mladih dizajnera. Relja je učenik pete gimnazije i istražuje svet umetnosti i dizajna sa strašću koja je neuporediva.
        <br />
        <br />
          Njegova sposobnost da stvori majice koje istovremeno odišu kreativnošću i originalnošću je zaista impresivna. Svaka njegova kreacija nosi pečat jedinstvenog stila i pažljivog odabira detalja. Majice koje dizajnira postale su prava modna ikona, omiljene među ljudima koji žele da izraze svoju ličnost i stil kroz svoju odeću.
          </p>
           <div className={styles.image}>
            <Image src="/imgs/slika2.jpg" objectPosition="0 30%" fill alt="Slika3" objectFit="cover" />
          </div>
        </div>

      </div>
    </>
  );
}
