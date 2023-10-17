import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Bg from '../../assets/landing/stats.jpg';
import { Title } from '../../components';
import { STATS } from '../../constants/landing';
import { NAVBAR_PAGES } from '../../constants/navbar';

const Stats = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
            })}
        >
            <Box
                sx={(theme) => ({
                    background: theme.gradient.primaryDarkAlpha,
                    py: 10,
                })}
            >
                <Container sx={{ alignSelf: 'center' }} id={NAVBAR_PAGES[3].id}>
                    <Title white>SIL en chiffre</Title>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item md={6} xs={12}>
                            
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Stack spacing={3} mb={10}>
                                <Typography
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.bold,
                                        color: theme.palette.common.white,
                                        fontSize: theme.fontSize['4xl'],
                                    })}
                                >
                                    Notre Engagement : Des Actions Concrètes
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
                                    Au Social Innovation Lab (SIL), notre engagement se mesure par nos réalisations tangibles. Avec plus de
                                    26 projets pilotes lancés, 8 projets implémentés avec succès et une collaboration fructueuse avec plus
                                    de 32 partenaires dévoués, notre lab d'innovation sociale démontre que même en tant que nouvel acteur,
                                    notre équipe ne connaît pas de limites.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5} alignItems="center">
                        {STATS.map((item) => (
                            <Grid item md={4} sm={6} xs={12}>
                                <Stack spacing={1}>
                                    <Typography
                                        sx={(theme) => ({
                                            fontWeight: theme.fontWeight.bold,
                                            fontSize: theme.fontSize['7xl'],
                                            color: theme.palette.common.white,
                                            lineHeight: 1,
                                        })}
                                    >
                                        {item.number}+
                                    </Typography>
                                    <Typography
                                        component="span"
                                        sx={(theme) => ({
                                            fontWeight: theme.fontWeight.light,
                                            fontSize: theme.fontSize.lg,
                                            color: theme.palette.common.white,
                                            lineHeight: 1,
                                        })}
                                    >
                                        {item.title}
                                    </Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Stats;
