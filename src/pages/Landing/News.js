import { Box, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Link, NewsCard, Title } from '../../components';
import { NAVBAR_PAGES } from '../../constants/navbar';
import { NEWS } from '../../constants/news';

const News = () => {
    return (
        <Box
            sx={(theme) => ({
                background: theme.palette.primary.dark,
                py: 10,
            })}
        >
            <Container sx={{ alignSelf: 'center' }} id={NAVBAR_PAGES[0].id}>
                <Title white>{NAVBAR_PAGES[0].title}</Title>
                <Grid container spacing={3} alignItems="stretch">
                    {NEWS.map((item, index) => (
                        <Grid item md={4} sm={6} xs={12}>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
                                <Link to={item.link} target="_blank">
                                    <NewsCard {...item} index={index} />
                                </Link>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default News;
