import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Bg from '../../assets/background/polygon-scatter-haikei-3.png';
import { Title } from '../../components';
import MemberCard from '../../components/MemberCard';
import { TEAM } from '../../constants/landing';
import News from './News';

const Team = () => {
    // --- MEDIA QUERI
    const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    // --- carosselle
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: xs ? false : true,
        autoplayTimeout: 10000,
        smartSpeed: 450,
        // nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    };

    return (
        <Box>
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.palette.primary.dark,
                })}
            >
                <Box
                    sx={(theme) => ({
                        backgroundImage: `url(${Bg})`,
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'top',
                        backgroundSize: 'contain',
                        py: 10,
                    })}
                >
                    <Container sx={{ alignSelf: 'center' }}>
                        <Title white>notre équipe</Title>

                        <Stack spacing={3} mb={10}>
                            <Typography
                                sx={(theme) => ({
                                    fontWeight: theme.fontWeight.bold,
                                    color: theme.palette.common.white,
                                    fontSize: theme.fontSize['4xl'],
                                })}
                            >
                                Energie créative et Expertise diversifiée
                            </Typography>
                            <Typography
                                component="span"
                                sx={(theme) => ({
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.white,
                                    fontSize: theme.fontSize.lg,
                                    lineHeight: 2,
                                    textAlign: 'justify',
                                })}
                            >
                                Au cœur du Social Innovation Lab (SIL) se trouve une équipe diversifiée et passionnée, guidée par une quête
                                incessante d'Impact. Rassemblant des professionnels experts et des chercheurs engagés, chaque membre de
                                notre équipe apporte son savoir-faire unique pour façonner un avenir meilleur.
                            </Typography>
                        </Stack>
                        <OwlCarousel className="owl-carousel owl-theme" {...options}>
                            {TEAM.map((item) => (
                                <MemberCard {...item} />
                            ))}
                        </OwlCarousel>
                    </Container>
                </Box>
            </Box>
            {/* <Testimonial /> */}
            <News />
        </Box>
    );
};

export default Team;
