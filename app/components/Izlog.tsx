import React from "react";
import styles from "../../public/css/izlog.module.css";
import Image from "next/image";
export default function Izlog() {
  return (
    <div className={styles.izlog}>
      <h1>Izlog</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              fill
              alt="Slika"
              objectFit="cover"
              objectPosition="center"
              src="/imgs/card.jpeg"
            />
          </div>
          <div className={styles.notImage}>
            <div className={styles.left}>
              <div className={styles.naslov}>
                <h2>Muska YUGO majica crna</h2>
              </div>
              <div className={styles.cena}>
                {" "}
                <span>4.450,0</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.slika}>
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
        </div>{" "}
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              fill
              alt="Slika"
              objectFit="cover"
              objectPosition="center"
              src="/imgs/slika1.jpg"
            />
          </div>
          <div className={styles.notImage}>
            <div className={styles.left}>
              <div className={styles.naslov}>
                <h2>Muska YUGO majica crna</h2>
              </div>
              <div className={styles.cena}>
                {" "}
                <span>4.450,0</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.slika}>
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
        </div>{" "}
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              fill
              alt="Slika"
              objectFit="cover"
              objectPosition="center"
              src="/imgs/slika2.jpg"
            />
          </div>
          <div className={styles.notImage}>
            <div className={styles.left}>
              <div className={styles.naslov}>
                <h2>Muska YUGO majica crna</h2>
              </div>
              <div className={styles.cena}>
                {" "}
                <span>4.450,0</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.slika}>
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
        </div>{" "}
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              fill
              alt="Slika"
              objectFit="cover"
              objectPosition="center"
              src="/imgs/slika3.jpg"
            />
          </div>
          <div className={styles.notImage}>
            <div className={styles.left}>
              <div className={styles.naslov}>
                <h2>Muska YUGO majica crna</h2>
              </div>
              <div className={styles.cena}>
                {" "}
                <span>4.450,0</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.slika}>
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
        </div>{" "}
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              fill
              alt="Slika"
              objectFit="cover"
              objectPosition="center"
              src="/imgs/slika4.jpg"
            />
          </div>
          <div className={styles.notImage}>
            <div className={styles.left}>
              <div className={styles.naslov}>
                <h2>Muska YUGO majica crna</h2>
              </div>
              <div className={styles.cena}>
                {" "}
                <span>4.450,0</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.slika}>
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
        </div>{" "}
      </div>
    </div>
  );
}
