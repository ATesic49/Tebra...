import React from 'react'
import styles from '../../public/css/kontakt/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Customers from './components/Customers'
export default function page() {
  return (
    <div className={styles.kontakt}>
      <div className={styles.gore}>

        <div className={styles.image}>
          <Image src='/imgs/slika2.jpg' fill alt='' objectFit='cover' objectPosition='0 30%'/>
        </div>
        <div className={styles.naslov}> <h1>Budi i ti deo <span>tebra</span> tima!</h1></div>

      </div>
      <Customers/>
      <h2>Zelis da stupis u Kontakt sa nama?</h2>
      <div className={styles.dole}>

      <div className={styles.email}>
        <div className={styles.container}>
        <div className={styles.card}>
            <a className={styles.singup}>Posalji Nam Email</a>
            <div className={styles.inputBox1}>
                <input type="text" required={true}/>
                <span className={styles.user}>Email</span>
            </div>
<div className={styles.inputBox}>
                <input type="text" required={true}/>
                <span>Naslov</span>
            </div>
            <div className={styles.inputBox}>
                <textarea  required={true}/>
                <span>Tekst</span>
            </div>

            

            <button className={styles.enter}>Enter</button>

        </div>
    </div>
        
         </div>
         <div className={styles.stvar}>
          <input type="checkbox" id='checkbox' name='checkbox'/>
          <label htmlFor="checkbox"></label>
          <Image src={'/svgs/arrow.svg'} alt='' width={50} height={50} />
         </div>
      <div className={styles.tel}>
        <h2>Pozovite nas</h2>
        <Link href='tel:+381691120067' rel="stylesheet"  >069-112-00-67</Link>
      </div>
      </div>
    </div>
  )
}
