'use client';

import classNames from 'classnames';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../styles/carousel.css';
import Image from 'next/image';

const slides = ['/carousel/lab-1.webp', '/carousel/lab-2.webp', '/carousel/lab-3.webp'];

export default function CarouselHeader() {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            speed={800}
            autoplay={{
                delay: 3000,
            }}
            className="h-160 z-0"
        >
            {slides.map((img, index) => (
                <SwiperSlide key={img}>
                    <Image
                        src={img}
                        alt="this is a generic image of a lab"
                        fill
                        quality={90}
                        className={classNames('object-cover object-center', index % 2 ? 'zoom-in' : 'zoom-out')}
                        priority={index === 0}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
