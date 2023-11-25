'use client'
import React, { useState } from "react";
import styles from "../../public/css/izlog.module.css";
import styless from "../../public/css/korpa2.module.css";
import Image from "next/image";
import Slika from "./Slika";
import SearchBar from "./SearchBar";
import Korpa2 from "./Korpa2";
interface majice {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  cena: number;
  image: string;
  backImage: string;
  velicina: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    majicaId: number;
    boje: {
      id: number;
      name: string;
      created_at: Date;
      hex: String;
      updated_at: Date;
      stanje: number;
      velicinaId: number;
    }[]
  }[];

}

export default function Izlog({ majice }: { majice: majice[] }
) {

  const [isOpen, setIsOpen] = useState(styles.not)
  const [overlay, setOverlay] = useState(styless.overlayNot)
  const [korpa2, setKorpa2] = useState(majice[0])
  return (
    <>

      <div className={`${overlay} ${styless.overlay}`} onClick={() => {

        setIsOpen(styles.not)
        setOverlay(styless.overlayNot)
      }

      }
      >

      </div>
      <Korpa2 overlay={overlay} setOverlay={setOverlay} majica={korpa2} />

      <div className={styles.izlog}>
        <h1>Izlog</h1>
        <SearchBar />
        <div className={styles.grid}>


          {majice.map(majica => {
            return (
              <div className={styles.card}>
                <Slika

                  slika={majica.image} slikaBack={majica.backImage} />
                <div className={styles.notImage}>
                  <div className={styles.left}>
                    <div className={styles.naslov}>
                      <h2>{majica.name}</h2>
                    </div>
                    <div className={styles.cena}>
                      {" "}
                      <span>{majica.cena}</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.slika} onClick={() => {
                      setOverlay(styless.overlayYes)
                      setKorpa2(majica)
                    }}>
                      <Image

                        width={25}
                        height={25}
                        objectFit="contain"
                        objectPosition="center"
                        src="/svgs/cart.svg"
                        alt="cart"
                      ></Image>
                    </div>
                    <div className={styles.slika}>
                      <Image
                        width={25}
                        height={25}
                        objectFit="contain"
                        objectPosition="center"
                        src="/svgs/like.svg"
                        alt="cart"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}


        </div>
      </div>

    </>
  );
}
