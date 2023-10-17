import { Box, Container, Stack, Typography } from '@mui/material';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Bg from '../../assets/background/polygon-scatter-haikei-3.png';
import { Title } from '../../components';
import MemberCard from '../../components/MemberCard';
import { TEAM } from '../../constants/landing';
import { NAVBAR_PAGES } from '../../constants/navbar';
import Testimonial from './Testimonial';
import News from './News';

const Team = () => {
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
                items: 2,
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
                    <Container sx={{ alignSelf: 'center' }} id={NAVBAR_PAGES[5].id}>
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
                                })}
                            >
                                Au cœur du Social Innovation Lab (SIL) se trouve une équipe diversifiée et passionnée, guidée par une quête
                                incessante d'Impact. Rassemblant des professionnels experts et des chercheurs engagés, chaque membre de
                                notre équipe apporte son savoir-faire unique pour façonner un avenir meilleur.
                            </Typography>
                        </Stack>

                        {/* <Carousel
                            showStatus={false}
                            autoPlay={true}
                            // infiniteLoop={true}
                            interval={3000}
                            centerMode
                            centerSlidePercentage={25}
                            renderArrowPrev={(clickHandler, hasPrev) => {
                                return (
                                    <IconButton
                                        disabled={!hasPrev}
                                        sx={(theme) => ({
                                            height: '100%',
                                            background: theme.gradient.darkAlpha,
                                            position: 'absolute',
                                            top: '50%',
                                            zIndex: 10,
                                            left: 0,
                                            transform: 'translateY(-50%)',
                                            borderRadius: 0,
                                            color: theme.palette.common.white,
                                        })}
                                        onClick={clickHandler}
                                    >
                                        <BsArrowLeftShort />
                                    </IconButton>
                                );
                            }}
                            renderArrowNext={(clickHandler, hasNext) => {
                                return (
                                    <IconButton
                                        disabled={!hasNext}
                                        sx={(theme) => ({
                                            height: '100%',
                                            background: theme.gradient.darkAlpha,
                                            position: 'absolute',
                                            top: '50%',
                                            zIndex: 10,
                                            right: 0,
                                            transform: 'translateY(-50%)',
                                            borderRadius: 0,
                                            color: theme.palette.common.white,
                                        })}
                                        onClick={clickHandler}
                                    >
                                        <BsArrowRightShort />
                                    </IconButton>
                                );
                            }}
                        ></Carousel> */}

                        <OwlCarousel className="owl-carousel owl-theme" {...options}>
                            {TEAM.map((item) => (
                                <MemberCard {...item} />
                            ))}
                        </OwlCarousel>
                    </Container>
                </Box>
            </Box>
            <Testimonial />
            <News />
        </Box>
    );
};

export default Team;
