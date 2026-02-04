'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';

import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../styles/carousel.css';

const Images = [
    '/landing/partners/access.webp',
    '/landing/partners/agropolisa.webp',
    '/landing/partners/designfra.webp',
    '/landing/partners/etc.webp',
    '/landing/partners/gazprom.webp',
    '/landing/partners/indigo-rose.webp',
    '/landing/partners/indigo.webp',
    '/landing/partners/nextbit.webp',
    '/landing/partners/rolex.webp',
    '/landing/partners/soriana.webp',
];

export default function CarouselPartners() {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            breakpoints={{
                300: { slidesPerView: 2 },
                600: { slidesPerView: 3 },
                900: { slidesPerView: 4 },
                1100: { slidesPerView: 6 },
            }}
            spaceBetween={30}
            grabCursor
            loop
            className="w-full"
            freeMode
            speed={3000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
        >
            {Images.map((image) => (
                <SwiperSlide key={image}>
                    <Image src={image} width={200} height={50} alt="this is the picture of a company partner" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
