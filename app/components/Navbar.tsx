"use client";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../../public/css/navbar.module.css";
import LogInModal from "./LogInModal";
import styless from "../../public/css/logInModal.module.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});
export const dynamic = "force-dynamic";

export default function Navbar() {
  const pathname = usePathname();
  const [upGallery, SetUpGallery] = useState(styles.down);
  const [upShop, SetUpShop] = useState(styles.down);
  const [options, SetOptions] = useState(styles.notSlide);
  const [isOpen, setIsopen] = useState(styless.not);
  useEffect(() => {
    SetUpGallery(styles.down);
    SetUpShop(styles.down);
  }, [pathname]);

  return (
    <>
      <div className={[styles.nav, ubuntu.className].join(" ")}>
        <div className={styles.options}>
          <Image
            src="/svgs/options.svg"
            width={20}
            height={20}
            alt="options"
            onClick={() => {
              if (options === styles.notSlide) SetOptions(styles.slide);
              else SetOptions(styles.notSlide);
            }}
          ></Image>
        </div>
        <Link href="/" className={styles.logo}>
          <Image
            src="/svgs/tebra.logo.svg"
            alt="Caliper"
            width={80}
            height={26}
          ></Image>
        </Link>
        <nav>
          <ul className={options}>
            <li>
              <Link href="/dizajnerske-rucice">Garderoba</Link>
              <Image
                className={upShop}
                src="/svgs/down.svg"
                alt="down"
                width={5}
                height={5}
                onClick={(e) => {
                  e.preventDefault();
                  if (upShop === styles.up) SetUpShop(styles.down);
                  else SetUpShop(styles.up);
                  SetUpGallery(styles.down);
                }}
              ></Image>
              <div className={styles.menu}>
                <>
                  <div className={styles.container}>
                    <Link href="/fotelje" onClick={() => {}}>
                      {" "}
                      <h4>Muska</h4>{" "}
                    </Link>
                    <ul>
                      <li>
                        <Link href={`/dizajnerske-rucice/`}>Bela majica</Link>
                      </li>
                      <li>
                        <Link href={`/dizajnerske-rucice/`}>Crna majica</Link>
                      </li>
                      <li>
                        <Link href={`/dizajnerske-rucice/`}>Roze majica</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.container}>
                    <Link href="/fotelje" onClick={() => {}}>
                      {" "}
                      <h4>Zenska</h4>{" "}
                    </Link>
                    <ul>
                      <li>
                        <Link href={`/dizajnerske-rucice/`}>Bela majica</Link>
                      </li>
                      <li>
                        <Link href={`/dizajnerske-rucice/`}>Crna majica</Link>
                      </li>
                      <li>
                        <Link href={`/dizajnerske-rucice/`}>Roze majica</Link>
                      </li>
                    </ul>
                  </div>
                </>
              </div>
            </li>
            <li>
              <Link href="/asesoari">Asesoari</Link>
            </li>
            <li>
              <Link href="/o-nama">O Nama</Link>
            </li>
            {/* <li>
            <Link href="/galerija">Galerija</Link>
            <Image
              className={upGallery}
              src="/svgs/down.svg"
              alt="down"
              width={5}
              height={5}
              onClick={(e) => {
                e.preventDefault();
                if (upGallery === styles.up) SetUpGallery(styles.down);
                else SetUpGallery(styles.up);
                SetUpShop(styles.down);
              }}
            ></Image>
            <div className={styles.menu}>
              <>
                <div className={styles.container}>
                  <Link href="/galerija" onClick={() => {}}>
                    {" "}
                    <h4 style={{ textTransform: "capitalize" }}>TEXT</h4>{" "}
                  </Link>
                  <ul>
                    <li>
                      <Link href={`/galerija/}`}>gal</Link>
                    </li>
                  </ul>
                </div>
              </>
            </div>
          </li> */}

            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.buttons}>
          <Image
            onClick={() => setIsopen(styless.yes)}
            className={styles.avatar}
            src={"/svgs/avatar.svg"}
            width={25}
            height={25}
            alt="avatar"
          ></Image>
          <button>Log In</button>
          <button>Sing Up</button>
        </div>
        <div className={styles.logIn}>
          <h2>Uloguj se</h2>
          <label htmlFor="name">Korisničko Ime:</label>
          <input type="text" name="name" />
          <label htmlFor="password">Lozinka:</label>
          <input type="password" name="password" />
          <label htmlFor="tel">Broj Telefona:</label>
          <input type="tel" name="tel" />
          <button>Submit</button>
        </div>
      </div>
      <LogInModal isOpen={isOpen} setIsOpen={setIsopen} />
    </>
  );
}
// function groupByFirstWord(arr: galerija[] | rucice[]): string[][] {
//   const result: Record<string, string[]> = {};

//   arr.forEach((str) => {
//     const firstWord = str.name.split(" ")[0].toLowerCase();

//     if (!result[firstWord]) {
//       result[firstWord] = [str.name];
//     } else {
//       result[firstWord].push(str.name);
//     }
//   });

//   return Object.values(result);
// }
