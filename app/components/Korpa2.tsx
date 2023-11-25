'use client'
import React, { useContext, useState } from 'react'
import styles from '../../public/css/korpa2.module.css'
import Image from 'next/image';
import KorpaContext, { KorpaContexte } from '../context/KorpaContext';
import { setCookie } from 'cookies-next';
interface boje {
  id: number;
  name: string;
  hex: String
  created_at: Date;
  updated_at: Date;
  stanje: number;
  velicinaId: number;
}
interface velicina {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  majicaId: number;
  boje: boje[]

}
interface jednaVelicina {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  majicaId: number;
  boje: boje

}
interface majice {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  cena: number;
  image: string;
  backImage: string;
  velicina: velicina[]

}
interface jednaMajica {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  cena: number;
  image: string;
  backImage: string;
  velicina: jednaVelicina
}
interface korpa2 {
  majica: majice;
  overlay: string,
  setOverlay: React.Dispatch<React.SetStateAction<string>>
}
export default function Korpa2({ majica, overlay, setOverlay }: korpa2) {

  const [currentVelicina, setCurrentVelicina] = useState(majica.velicina[0])
  const KorpaContext = useContext(KorpaContexte)
  const [jednaMajica, setJednaMajica] = useState<jednaMajica>({
    ...majica,
    velicina: {
      ...majica.velicina[0],
      boje: majica.velicina[0].boje[0]
    }

  })
  const [indexVB, setIndexVB] = useState({
    v: 0,
    b: 0
  })
  console.log(overlay)
  return (

    <div className={`${styles.container} ${overlay}`} >
      <h2 onClick={() => {

      }}>Meni</h2>


      <div className={styles.izaberi}>
        <p>Izaberi velicinu</p>
        <div className={styles.velicina}>
          {majica.velicina.map(velicina => {
            const index = majica.velicina.indexOf(velicina)
            return (
              <div key={index} onClick={() => {
                setCurrentVelicina(velicina)
                setIndexVB({
                  ...indexVB,
                  v: index
                })
              }}>{velicina.name}</div>
            )
          })}
        </div>
      </div>
      <div className={styles.izaberi}>
        <p>Izaberi boju</p>
        {KorpaContext.korpa && KorpaContext.korpa.length > 0 ? KorpaContext.korpa[0].name : null}
        <div className={styles.boje}>
          {currentVelicina.boje.map(boja => {
            const index = currentVelicina.boje.indexOf(boja)

            return (<>
              <div> <div onClick={() => {
                setIndexVB({
                  ...indexVB,
                  b: index
                })
              }} key={index} tabIndex={0} style={{ backgroundColor: `${boja.hex}` }}></div></div>
            </>)
          })}

        </div>


      </div>
      <button onClick={() => {

        setOverlay(styles.overlayNot)
        KorpaContext.setKorpa(ko => {
          if (!ko) {
            ko = []
          }
          ko.push({
            ...majica,
            velicina: {
              ...majica.velicina[indexVB.v],
              boje: majica.velicina[indexVB.v].boje[indexVB.b]
            }
          })

          console.log(ko)
          return ko

        })
        // KorpaContext.setKorpa([{
        //   id: 2,
        //   image: 'HELLO',
        //   name: 'ALEKSa',
        //   created_at: new Date(Date.now()),
        //   updated_at: new Date(Date.now()),
        //   cena: 3,
        //   backImage: 'Hello Back',
        //   velicina: [{
        //     id: 1,
        //     name: 'asda',
        //     created_at: new Date(Date.now()),
        //     updated_at: new Date(Date.now()),
        //     majicaId: 1,
        //     boje: [{
        //       id: 2,
        //       name: 'ra',
        //       hex: '#222',
        //       created_at: new Date(Date.now()),
        //       updated_at: new Date(Date.now()),
        //       velicinaId: 1,
        //       stanje: 2
        //     }]
        //   }]
        // }])
        setCookie('korpa', JSON.stringify(KorpaContext.korpa), { maxAge: 60 * 60 * 24 * 6 })
      }

      }>Dodaj u korpu</button>

    </div>
  )
}
