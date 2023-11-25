import React from 'react'
import styles from '../../../public/css/kontakt/components/customers.module.css'
import Image from 'next/image'
export default function Customers() {
  return (
    <div className={styles.container}>
      {/* <h2>Naslov</h2> */}
   <div className={styles.customers}>

    <div className={styles.card}>
      <div className={styles.levo}>

    <div className={styles.image}> <Image src='/svgs/avatar.svg'fill alt='customers' ></Image></div>
    <h3>Number of active customers</h3>
      </div>
      <div className={styles.desno}>
    <strong>20+</strong>
      </div>
        
    </div>
      <div className={styles.card}>
      <div className={styles.levo}>

    <div className={styles.image}> <Image src='/svgs/avatar.svg'fill alt='customers' ></Image></div>
    <h3>Number of active customers</h3>
      </div>
      <div className={styles.desno}>
    <strong>20+</strong>
      </div>
        
    </div>
       <div className={styles.card}>
      <div className={styles.levo}>

    <div className={styles.image}> <Image src='/svgs/avatar.svg'fill alt='customers' ></Image></div>
    <h3>Number of active customers</h3>
      </div>
      <div className={styles.desno}>
    <strong>20+</strong>
      </div>
        
    </div>
 
     </div>
   </div>
  )
}
