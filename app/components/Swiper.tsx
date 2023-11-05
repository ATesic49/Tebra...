"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "../../public/css/swiper.module.css";
import "node_modules/swiper/swiper-bundle.min.css";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { useRouter } from "next/navigation";
export default function Swipper() {
  const router = useRouter();
  const [dugmeState, setDugmeState] = useState(styles.not);
  return (
    <div className={styles.swiper}>
      <Swiper
        style={{ width: "100%" }}
        //@ts-ignore
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <Image
            className={styles.img}
            src="/imgs/pocetna.jpeg"
            alt="Pocetna"
            fill
          />
          <div className={styles.textContainer}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nostrum hic nisi totam voluptas! Dolores at sequi omnis,
              blanditiis atque unde est! Voluptas sed doloremque minima cum
              laudantium! Iste, consequatur?
            </div>
            <button
              className={dugmeState}
              onClick={() => {
                setDugmeState(styles.yes);
                setTimeout(() => router.push("/location"), 500);
              }}
            >
              <p>Click me!</p>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            className={styles.img}
            src="/imgs/pocetnadva.jpeg"
            alt="Pocetna"
            fill
          />
          <div className={styles.textContainer}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nostrum hic nisi totam voluptas! Dolores at sequi omnis,
              blanditiis atque unde est! Voluptas sed doloremque minima cum
              laudantium! Iste, consequatur?
            </div>
            <button
              className={dugmeState}
              onClick={() => {
                setDugmeState(styles.yes);
                setTimeout(() => router.push("/location"), 500);
              }}
            >
              <p>Click me!</p>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            className={styles.img}
            src="/imgs/slika1.jpg"
            alt="Pocetna"
            fill
            objectPosition="0 40%"
          />
          <div className={styles.textContainer}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              nostrum hic nisi totam voluptas! Dolores at sequi omnis,
              blanditiis atque unde est! Voluptas sed doloremque minima cum
              laudantium! Iste, consequatur?
            </div>
            <button
              className={dugmeState}
              onClick={() => {
                setDugmeState(styles.yes);
                setTimeout(() => router.push("/location"), 500);
              }}
            >
              <p>Click me!</p>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
