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
                    <Title white>{NAVBAR_PAGES[3].title}</Title>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item md={6} xs={12}>
                            <Stack spacing={3} mb={10}>
                                <Typography
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.bold,
                                        color: theme.palette.common.white,
                                        fontSize: theme.fontSize['4xl'],
                                    })}
                                >
                                    Settled wishing ability musical may another set age.
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
                                    He unaffected sympathize discovered at no am conviction principles. Girl ham very how yet hill four
                                    show. Meet lain on he only size. Branched learning so subjects mistress do appetite jennings be in.
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
