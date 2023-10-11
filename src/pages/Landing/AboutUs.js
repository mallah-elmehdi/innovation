import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from '../../assets/landing/about-us.png';
import { Img, Title } from '../../components';
import { NAVBAR_PAGES } from '../../constants/navbar';
import Bg from '../../assets/background/polygon-scatter-haikei.png';

const AboutUs = () => {
    return (
        <Box
            id={NAVBAR_PAGES[1].id}
            sx={{
                position: 'relative',
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
            }}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title>{NAVBAR_PAGES[1].title}</Title>
                <Grid container spacing={5} alignItems="center">
                    <Grid item md={6} xs={12}>
                        <Typography
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.bold,
                                fontSize: theme.fontSize['4xl'],
                                color: theme.palette.common.black,
                                mb: 0.25,
                            })}
                        >
                            SOCIAL INNOVATION LAB
                        </Typography>
                        <Typography
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.light,
                                fontSize: theme.fontSize.sm,
                                color: theme.palette.grey[500],
                                lineHeight: 2,
                                mb: 3,
                            })}
                        >
                            Une plateforme ouverte pour l'écosystème Africain et Marocain
                        </Typography>
                        <Typography
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.light,
                                fontSize: theme.fontSize.lg,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Un espace d'innovation sociale, de recherche-action et de co-construction qui accompagne les populations, les
                            acteurs et les organisations privées ou publiques dans la réflexion et le développement de leurs projets sociaux
                            au niveau local, régional, national et africain.
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Img
                            src={Image}
                            sx={(theme) => ({
                                boxShadow: theme.shadows.png,
                            })}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutUs;
