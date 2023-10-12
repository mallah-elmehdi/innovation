import { Container } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Img, Title } from '../../components';
import { PARTENAIRES } from '../../constants/landing';

const Partenaires = () => {
    return (
        <Container sx={{ alignSelf: 'center' }}>
            <Title>Partenaires</Title>

            <Carousel
                showStatus={false}
                autoPlay={true}
                interval={3000}
                centerMode
                centerSlidePercentage={15}
                showArrows={false}
                showIndicators={false}
            >
                {PARTENAIRES.map((item) => (
                    <Img sx={{ width: 300 }} src={item} />
                ))}
            </Carousel>
        </Container>
    );
};

export default Partenaires;
