import { Container } from '@mui/material';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Img, Title } from '../../components';
import { PARTENAIRES } from '../../constants/landing';

const Partenaires = () => {
    // --- carosselle
    const options = {
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
        dots: false,
        autoplayTimeout: 1000,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 6,
            },
            1000: {
                items: 9,
            },
        },
    };

    return (
        <Container sx={{ alignSelf: 'center' }}>
            <Title>Partenaires</Title>
            <OwlCarousel className="owl-carousel owl-theme" {...options}>
                {PARTENAIRES.map((item) => (
                    <Img sx={{ width: 300 }} src={item} />
                ))}
            </OwlCarousel>
        </Container>
    );
};

export default Partenaires;
