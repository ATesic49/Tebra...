'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '../../../public/css/o-nama/page.module.css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';


export default function Swipeer() {
  return (
        <Swiper
   
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajicaPozadi.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajicaPozadi.jpg'}/></SwiperSlide>

        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajicaPozadi.jpg'}/></SwiperSlide>

        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
        <SwiperSlide className={styles.slide}><Image alt='majica' fill objectFit='cover' objectPosition='center' src={'/imgs/stakorMajica.jpg'}/></SwiperSlide>
       
      </Swiper>
  )
}
