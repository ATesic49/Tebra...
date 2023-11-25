'use client'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../public/css/korpa/page.module.css'
import Image from 'next/image'
import { KorpaContexte, majice } from '../context/KorpaContext'
import { setCookie } from 'cookies-next'
import axios from 'axios'
import Link from 'next/link'
export default function
  () {
  const korpa = useContext(KorpaContexte)
  useEffect(() => {
    if (korpa.korpa !== null && korpa.korpa.length > 0) {
      setCookie('korpa', JSON.stringify(korpa.korpa), { maxAge: 60 * 60 * 24 * 6 })
      console.log(korpa.korpa, 'cookie set!')
    }

  }, [korpa.korpa])



  const [status, setStatus] = useState('')
  const sendEmail = async () => {
    try {
      const res = await axios.post('/api/email', {
        majica: JSON.stringify(korpa.korpa)

      })
      setCookie('korpa', JSON.stringify([]))
      if (res.status === 200) {
        setStatus('Uspesno ste narucili majicu :)')
      }
    } catch (e) {
      console.log(e)
      setStatus('Negde je doslo do greške')

    }
  }
  return (
    <>
      <div className={styles.korpa}>
        <h1>Korpa</h1>
        <div className='text-center m[1em] text-l'>{status}</div>

        <div className={styles.container}>
          <div className={styles.levo}>

            {korpa.korpa && korpa.korpa.length > 0 ? korpa.korpa.map(item => {
              //@ts-ignore
              const index = korpa.korpa.indexOf(item)

              return (<>
                <div className={styles.card}>

                  <div className={styles.x}> <Image src='/svgs/x.svg' alt='' onClick={async () => {
                    await korpa.setKorpa((ko) => {
                      if (!ko) {
                        ko = []
                      }
                      return ko.slice(0, index).concat(ko.slice(index + 1))
                    })



                  }} fill></Image></div>
                  <Image src={item.image} alt='' width={250} height={100} ></Image>
                  <h2>{item.name} {item.velicina.name} {item.velicina.boje.name} </h2>
                  <strong>

                    {item.cena}
                  </strong>
                  <div className={styles.skrozDole}>
                    <p>{item.velicina.name}</p>
                    <div style={{ backgroundColor: `${item.velicina.boje.hex} `, width: '1em', height: '1em' }}></div>
                  </div>
                </div>
              </>)
            }) :
              (<>

                <div className='w-full h-60 min-h-[10rem absolute top-0 left-0 flex gap-8 flex-col justify-center items-center pt-[5em]'>
                  <Image src={'/svgs/shopping.svg'} alt='Shopping Cart' width={250} height={250}
                    className='opacity-30 w-3/12'
                  ></Image>
                  <p className='text-xl text-center my-auto'>Tebraaaa, nemas ni jednu majicu &#129324; </p>
                  <Link href='/'
                    className={`text-center w-fit bg-[#d42704] px-4 py-2 rounded-md text-white ${styles.link}`}
                  >Dodaj majice!</Link>


                </div>



              </>)

            }



          </div>
          <div className={styles.desno}>

            <div className={styles.gore}>
              <div className={styles.heading}>
                <h3>Ime Proizvoda:</h3>
                <h3>Cena:</h3>
              </div>
              {korpa.korpa && korpa.korpa.length > 0 ? korpa.korpa.map(item => {
                return (
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.cena}</span>
                  </div>
                )
              }) : <div style={{ minHeight: '10em' }}> <strong></strong></div>}




              <div className={styles.cena}>
                <h3>Ukupno:</h3>
                {korpa.korpa && korpa.korpa.length > 0 ? <span>{saberiCene(korpa.korpa)}</span> : <span>0</span>}
              </div>
            </div>

            <button onClick={() => {
              sendEmail()
            }}>Poruci</button>
          </div>
        </div>
      </div>
    </>
  )
}
const saberiCene = (array: majice[]) => {
  let i = 0
  array.forEach(element => {
    i = i + element.cena

  });
  return i
}
