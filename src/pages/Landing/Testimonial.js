import { Box, Container, Stack, Typography } from '@mui/material';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Bg from '../../assets/background/squares.png';
import { TestimonialCard, Title } from '../../components';
import { TESTIMONIAL } from '../../constants/landing';
import '../../css/testimonial.css';

const Testimonial = () => {
    // --- carosselle
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 10000,
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
                items: 3,
            },
        },
    };
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'left',
                backgroundSize: 'cover',
            }}
        >
            <Box
                sx={(theme) => ({
                    py: 10,
                })}
            >
                <Container sx={{ alignSelf: 'center' }}>
                    <Title black>Témoignage</Title>
                    <Stack spacing={3} mb={10}>
                        <Typography
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.bold,
                                color: theme.palette.common.black,
                                fontSize: theme.fontSize['4xl'],
                            })}
                        >
                            Voix Vivantes de l'Impact Social
                        </Typography>
                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.common.black,
                                fontSize: theme.fontSize.lg,
                                lineHeight: 2,
                            })}
                        >
                            Dans ces récits, découvrez les expériences authentiques de ceux qui ont été touchés par le Social Innovation
                            Lab. Nous sommes reconnaissants envers nos précieux partenaires et tous ceux qui ont contribué à faire de ces
                            histoires de réussite une réalité inspirante.
                        </Typography>
                    </Stack>
                    <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                        {TESTIMONIAL.map((item) => (
                            <TestimonialCard {...item} />
                        ))}
                    </OwlCarousel>
                </Container>
            </Box>
        </Box>
    );
};

export default Testimonial;
