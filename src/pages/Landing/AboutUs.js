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
                <Title>Notre VISION ET MISSION</Title>
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
                            Au Social Innovation Lab (SIL), notre mission est de faciliter l'innovation sociale en collaborant avec les
                            communautés pour résoudre les défis locaux, nationaux et internationaux, tout en favorisant le développement
                            durable. Guidés par notre vision, nous aspirons à bâtir un avenir socialement innovant à travers des initiatives
                            inclusives et durables, propulsant le progrès au-delà des frontières.
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
