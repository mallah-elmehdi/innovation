import { Box, Container, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../api/sanity';
import { Button, Link, NewsCard, Title } from '../../components';
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
        <Box
            sx={(theme) => ({
                py: 10,
            })}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title>Actualités & annonces</Title>
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
                        .slice(0, 3)
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
                <Stack alignItems="center" mt={5}>
                    <Link to={PAGES.news.url}>
                        <Button
                            sx={(theme) => ({
                                backgroundColor: theme.palette.primary.dark,
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                },
                            })}
                        >
                            Voir plus
                        </Button>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default News;
