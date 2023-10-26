import { Box, Container, Typography, alpha } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slide1 from '../../assets/landing/header/slide-1.jpg';
import Slide10 from '../../assets/landing/header/slide-10.jpg';
import Slide2 from '../../assets/landing/header/slide-2.jpg';
import Slide3 from '../../assets/landing/header/slide-3.jpg';
import Slide4 from '../../assets/landing/header/slide-4.jpg';
import Slide5 from '../../assets/landing/header/slide-5.jpg';
import Slide6 from '../../assets/landing/header/slide-6.jpg';
import Slide7 from '../../assets/landing/header/slide-7.jpg';
import Slide8 from '../../assets/landing/header/slide-8.jpg';
import Slide9 from '../../assets/landing/header/slide-9.jpg';
import { NavbarIn } from '../../components';

const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];

const Header = () => {
    return (
        <Box position="relative" width="100%">
            <Slider
                {...{
                    fade: true,
                    infinite: true,
                    speed: 5500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    lazyLoad: 'progressive',
                    autoplay: true,
                    autoplaySpeed: 5500,
                    arrows: false,
                }}
            >
                {images.map((image, index) => (
                    <>
                        <Box
                            key={index}
                            sx={{
                                height: { md: 650, xs: 850 },
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className={index % 2 ? 'zoom-in' : 'zoom-out'}
                        />
                    </>
                ))}
            </Slider>
            <Box position="absolute" width="100%" top={0} right={0} zIndex={100}>
                <NavbarIn />
            </Box>
            <Box
                position="absolute"
                width="100%"
                height="100%"
                top="50%"
                right="50%"
                sx={(theme) => ({
                    overflow: 'hidden',
                    transform: 'translate(50%, -50%)',
                })}
            >
                {[1, 1, 1, 1].map((_, index) => (
                    <Box
                        style={{}}
                        position="absolute"
                        top={index * 50}
                        left={0}
                        sx={(theme) => ({
                            backgroundColor: theme.palette.primary.secondary,
                            width: 40,
                            height: 40,
                        })}
                    />
                ))}
            </Box>
            <Box
                position="absolute"
                width="100%"
                height="100%"
                top="50%"
                right="50%"
                sx={(theme) => ({
                    overflow: 'hidden',
                    transform: 'translate(50%, -50%)',
                })}
            >
                {[1, 1, 1, 1].map((_, index) => (
                    <Box
                        style={{}}
                        position="absolute"
                        right={index * 50}
                        bottom={0}
                        sx={(theme) => ({
                            backgroundColor: theme.palette.primary.secondary,
                            width: 40,
                            height: 40,
                        })}
                    />
                ))}
            </Box>
            <Box
                position="absolute"
                width="100%"
                height="100%"
                top="50%"
                right="50%"
                sx={(theme) => ({
                    transform: 'translate(50%, -50%)',
                    background: theme.gradient.primaryDark,
                    opacity: 0.7,
                })}
            />
            <Box
                position="absolute"
                width="100%"
                // bottom={0}
                top="50%"
                right="50%"
                zIndex={10}
                sx={(theme) => ({ transform: 'translate(50%, -50%)', backgroundColor: alpha(theme.palette.common.white, 0.25), py: 5 })}
            >
                <Container maxWidth="md">
                    <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.bold,
                            fontSize: { md: theme.fontSize['4xl'], xs: theme.fontSize['3xl'] },
                            color: theme.palette.common.white,
                            textAlign: 'justify',
                            lineHeight: 1.2,
                            mb: 3,
                        })}
                    >
                        Bienvenue au SIL, un catalyseur d'innovation sociale au cœur de l'UM6P.
                    </Typography>
                    <Typography
                        sx={(theme) => ({
                            fontSize: { md: theme.fontSize['md'], xs: theme.fontSize['sm'] },
                            color: theme.palette.common.white,
                            textAlign: 'justify',
                            fontWeight: theme.fontWeight.light,
                        })}
                    >
                        SIL est une plateforme d'innovation sociale, de recherche-action et de coconstruction. Nous accompagnons les
                        populations, acteurs privés et publics dans le développement de projets sociaux locaux, régionaux, nationaux et
                        africains.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Header;
