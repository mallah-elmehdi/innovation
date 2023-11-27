import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import Bg from '../../assets/background/polygon-scatter-haikei-2.png';
import { Footer, Link, Navbar, NewsCard } from '../../components';
import { PAGES } from '../../constants/pages';
import { NEWS } from '../../constants/news/all';

const News = () => {
    return (
        <Stack spacing={5}>
            <Box>
                <Navbar />
                <Box
                    sx={(theme) => ({
                        backgroundColor: theme.palette.primary.dark,
                    })}
                >
                    <Container sx={{ alignSelf: 'center' }}>
                        <Box
                            sx={(theme) => ({
                                backgroundImage: `url(${Bg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'left',
                                backgroundSize: 'contain',
                                py: 10,
                            })}
                        >
                            <Stack spacing={3}>
                                <Typography
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.bold,
                                        color: theme.palette.common.white,
                                        fontSize: theme.fontSize['4xl'],
                                    })}
                                >
                                    Actualités & annonces
                                </Typography>
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Container sx={{ alignSelf: 'center' }}>
                <Grid container spacing={3} alignItems="stretch">
                    {NEWS.map((item, index) => (
                        <Grid item md={4} sm={6} xs={12}>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
                                <Link to={PAGES.news.url + '/' + item.slug} target="_blank">
                                    <NewsCard
                                        category={item.category}
                                        date={item.date}
                                        title={item.title}
                                        image={item.image.src}
                                        index={index}
                                    />
                                </Link>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </Stack>
    );
};

export default News;
