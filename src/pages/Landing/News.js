import { Box, Container, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Button, Link, NewsCard, Title } from '../../components';
import { PAGES } from '../../constants/pages';
import { NEWS } from '../../constants/news/all';

console.log('NEWS', NEWS);

const News = () => {
    return (
        <Box
            sx={(theme) => ({
                py: 10,
            })}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title>Actualités & annonces</Title>
                <Grid container spacing={3} alignItems="stretch">
                    {NEWS.slice(0, 3).map((item, index) => (
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
