import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../api/sanity';
import Bg from '../../assets/background/polygon-scatter-haikei-2.png';
import { Footer, Link, Navbar, NewsCard } from '../../components';
import { PAGES } from '../../constants/pages';

const News = () => {
    // -------------
    const [blogs, setBlogs] = useState([]);

    // -------------
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"] {
                      title,
                      slug,
                      body,
                      publishedAt,
                      mainImage {
                      asset -> {
                          _id,
                          url,
                      },
                      alt
                      },
                      "author": author->,
                      "categories": categories[]->
                  }`
            )
            .then((data) => setBlogs(data))
            .catch(console.error);
    }, []);

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
                                {/* <Typography
                                    component="span"
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.light,
                                        color: theme.palette.common.white,
                                        fontSize: theme.fontSize.lg,
                                        lineHeight: 2,
                                        textAlign: 'justify',
                                    })}
                                >
                                    Découvrez nos dernières actualités avec les nouvelles cartes d'informations. Restez informé(e) en temps
                                    réel sur les avancées, découvertes et événements actuels
                                </Typography> */}
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Container sx={{ alignSelf: 'center' }}>
                <Grid container spacing={3} alignItems="stretch">
                    {blogs
                        .sort((a, b) => {
                            const time_a = new Date(a?.publishedAt);
                            const time_b = new Date(b?.publishedAt);

                            if (time_a > time_b) {
                                return -1;
                            }
                            return 1;
                        })
                        .map((item, index) => (
                            <Grid item md={4} sm={6} xs={12}>
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
                                    <Link to={PAGES.news.url + '/' + item?.slug?.current} target="_blank">
                                        <NewsCard
                                            category={item?.categories[0]?.title}
                                            date={item?.publishedAt}
                                            title={item?.title}
                                            image={item?.mainImage?.asset?.url}
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
