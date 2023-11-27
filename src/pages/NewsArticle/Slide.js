import { CardMedia } from '@mui/material';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Slide = ({ images }) => {
    const options = {
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        // nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    };
    return (
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
            {images.map((item) => (
                <CardMedia
                    image={item}
                    sx={{
                        height: 300,
                        width: '98%',
                    }}
                />
            ))}
        </OwlCarousel>
    );
};

export default Slide;
