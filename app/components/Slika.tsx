"use client";
import React from "react";
import styles from "../../public/css/izlog.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/effect-fade';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { EffectFade, Pagination } from "swiper/modules";

interface Slike {
  slika: String;
  slikaBack: String
}
export default function Slika({ slika, slikaBack }: Slike) {
  return (
    <Swiper loop={true} effect={'fade'} pagination={true} modules={[EffectFade, Pagination]} className={styles.slika}>
      {/* <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox"></label> */}
      <SwiperSlide className={styles.image}>
        <Image
          fill
          alt="Slika"
          objectFit="cover"
          objectPosition="center"
          src="/imgs/stakorMajica.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.image}>
        <Image
          fill
          alt="Slika"
          objectFit="cover"
          objectPosition="center"
          src="/imgs/stakorMajicaPozadi.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
