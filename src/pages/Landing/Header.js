import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Bg from '../../assets/landing/header.png';
import ImageTop from '../../assets/landing/header/blob-1.png';
import ImageBottom from '../../assets/landing/header/blob-2.png';
import { Img, NavbarIn } from '../../components';
import News from './News';

const Header = () => {
    return (
        <Box>
            <Box
                position="relative"
                sx={(theme) => ({
                    backgroundImage: `url(${Bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    minHeight: { md: 750, xs: 950 },
                })}
            >
                <NavbarIn />

                <Container maxWidth="lg" sx={{ alignSelf: 'center', pb: 5, pt: 15 }}>
                    <Box width="100%" mb={2}>
                        <Grid container alignItems="center">
                            <Grid item md={4}>
                                <Img
                                    src={ImageTop}
                                    sx={(theme) => ({
                                        boxShadow: theme.shadows.png,
                                    })}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box width="100%">
                        <Grid container alignItems="center" flexDirection="row-reverse">
                            <Grid item md={4}>
                                <Img
                                    src={ImageBottom}
                                    sx={(theme) => ({
                                        boxShadow: theme.shadows.png,
                                    })}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box position="absolute" width="100%" top="47%" right="50%" zIndex={10} sx={{ transform: 'translate(50%, -50%)' }}>
                        <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
                            <Typography
                                sx={(theme) => ({
                                    fontWeight: theme.fontWeight.bold,
                                    fontSize: { md: theme.fontSize['6xl'], xs: theme.fontSize['5xl'] },
                                    color: theme.palette.common.white,
                                    textAlign: 'center',
                                    lineHeight: 1.2,
                                    mb: 3,
                                })}
                            >
                                Empowering Rural Agriculture through Family Cooperatives
                            </Typography>
                        </Container>
                        <Container maxWidth="md" sx={{ flexGrow: 1 }}>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: { md: theme.fontSize['xl'], xs: theme.fontSize['xl'] },
                                    color: theme.palette.common.white,
                                    textAlign: 'center',
                                    fontWeight: theme.fontWeight.light,
                                })}
                            >
                                In response to the rural-agricultural gap, the Social Innovation Lab launched a project aiming to empower
                                farmers, boost productivity, and achieve financial autonomy for rural communities.
                            </Typography>
                        </Container>
                    </Box>
                </Container>
            </Box>
            <News />
        </Box>
    );
};

export default Header;
