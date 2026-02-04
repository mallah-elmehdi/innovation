'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';

import { TEAM_MEMBERS } from '@/constants/team';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../styles/carousel.css';
import TeamCard from './TeamCard';

export default function CarouselTeam() {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            breakpoints={{
                300: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1100: { slidesPerView: 4 },
            }}
            spaceBetween={30}
            grabCursor
            loop
            autoplay={{ delay: 3000 }}
            className="w-full h-80 "
        >
            {TEAM_MEMBERS.map((member) => (
                <SwiperSlide key={member.image}>
                    <TeamCard {...member} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
