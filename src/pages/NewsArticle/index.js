import { Avatar, Box, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Bg from '../../assets/background/polygon-scatter-haikei-4.png';
import { Footer, Img, Navbar, VideoPlayer } from '../../components';
import { Category } from '../../components/BlogCard';
import { NEWS } from '../../constants/news/all';
import { PAGES } from '../../constants/pages';
import { dateFormattingTxtFull } from '../../utils/functions';
import Slide from './Slide';

const NewsArticle = () => {
    // ========== CHANGE PAGE INFO
    const { slug } = useParams();
    const navigate = useNavigate();

    // blog
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            const article = NEWS.find((item) => item.slug === slug);
            if (!article) {
                navigate(PAGES.landing.url);
                setLoading(true);
            } else {
                setBlog(article);
                setLoading(false);
            }
        }
    }, [navigate, slug]);

    return (
        <>
            {!blog || loading ? (
                <Box width="100vw" height="100vh"></Box>
            ) : (
                <Stack spacing={5}>
                    <Box>
                        <Navbar />
                        <Box
                            sx={(theme) => ({
                                backgroundColor: theme.palette.primary.dark,
                            })}
                        >
                            <Container maxWidth="md" sx={{ alignSelf: 'center' }}>
                                <Box
                                    sx={(theme) => ({
                                        backgroundImage: `url(${Bg})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right bottom',
                                        backgroundSize: '10rem',
                                    })}
                                >
                                    <Box py={10}>
                                        <Stack spacing={3}>
                                            <Typography
                                                component="h1"
                                                sx={(theme) => ({
                                                    fontSize: theme.fontSize['4xl'],
                                                    color: theme.palette.common.white,
                                                    fontWeight: theme.fontWeight.bold,
                                                    mb: 5,
                                                })}
                                            >
                                                {blog.title}
                                            </Typography>
                                            <Box display="flex" gap={1} alignItems="center" mb={2}>
                                                <Avatar
                                                    sx={(theme) => ({
                                                        width: 50,
                                                        height: 50,
                                                        p: 0.5,
                                                        border: '0.5px solid',
                                                        borderColor: theme.palette.primary.main,
                                                        backgroundColor: theme.palette.common.white,
                                                    })}
                                                    src={blog.author.image}
                                                />

                                                <Stack spacing={0.25}>
                                                    <Typography
                                                        component="h1"
                                                        sx={(theme) => ({
                                                            fontSize: theme.fontSize.xs,
                                                            color: theme.palette.common.white,
                                                            fontWeight: theme.fontWeight.light,
                                                        })}
                                                    >
                                                        BY{' '}
                                                        <Typography
                                                            component="span"
                                                            sx={(theme) => ({
                                                                textTransform: 'uppercase',
                                                                fontSize: theme.fontSize.xs,
                                                                color: theme.palette.common.white,
                                                                fontWeight: theme.fontWeight.bold,
                                                            })}
                                                        >
                                                            {blog.author.name}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        component="i"
                                                        sx={(theme) => ({
                                                            textTransform: 'uppercase',
                                                            fontSize: theme.fontSize.xs,
                                                            fontWeight: theme.fontWeight.light,
                                                            color: theme.palette.common.white,
                                                        })}
                                                    >
                                                        {dateFormattingTxtFull(blog.date)}
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                    <Container maxWidth="md" sx={{ alignSelf: 'center' }}>
                        <Stack>
                            {blog.image.is_active && (
                                <Img
                                    src={blog.image.src}
                                    sx={(theme) => ({
                                        borderRadius: theme.borderRadius.xs,
                                    })}
                                />
                            )}
                            <Stack direction="row" gap={1.25} mt={1.25} flexWrap="wrap">
                                <Category category={blog.category} />
                            </Stack>
                            <Stack spacing={3} my={5}>
                                {blog.content.map((item) => {
                                    if (item.is_video) {
                                        return <VideoPlayer videoId={item.id} />;
                                    } else if (item.is_slider) {
                                        return <Slide images={item.images} />;
                                    } else if (item.is_unique) {
                                        return item.element;
                                    } else if (item.is_list) {
                                        return (
                                            <Typography sx={{ pl: 3 }} component="ul">
                                                {item.elements.map((child) => (
                                                    <Typography component="li">
                                                        <Typography
                                                            component={item.tag}
                                                            sx={(theme) => ({
                                                                fontSize: theme.fontSize[item.size],
                                                                fontWeight: theme.fontWeight[item.style],
                                                                color: theme.palette.common.black,
                                                                lineHeight: 2,
                                                            })}
                                                        >
                                                            {child.text}
                                                        </Typography>
                                                    </Typography>
                                                ))}
                                            </Typography>
                                        );
                                    }
                                    return (
                                        <Typography
                                            component={item.tag}
                                            sx={(theme) => ({
                                                fontSize: theme.fontSize[item.size],
                                                fontWeight: theme.fontWeight[item.style],
                                                color: theme.palette.common.black,
                                                lineHeight: 2,
                                            })}
                                        >
                                            {item.text}
                                        </Typography>
                                    );
                                })}
                            </Stack>
                        </Stack>
                    </Container>
                    <Footer />
                </Stack>
            )}
        </>
    );
};

export default NewsArticle;
