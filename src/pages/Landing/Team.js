import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Bg from '../../assets/background/polygon-scatter-haikei-3.png';
import { Title } from '../../components';
import MemberCard from '../../components/MemberCard';
import { TEAM } from '../../constants/landing';
import { NAVBAR_PAGES } from '../../constants/navbar';
import Testimonial from './Testimonial';

const Team = () => {
    return (
        <Box>
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.palette.secondary.dark,
                })}
            >
                <Box
                    sx={(theme) => ({
                        backgroundImage: `url(${Bg})`,
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'top',
                        backgroundSize: 'contain',
                        py: 10,
                    })}
                >
                    <Container sx={{ alignSelf: 'center' }} id={NAVBAR_PAGES[5].id}>
                        <Title white>{NAVBAR_PAGES[5].title}</Title>

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
                                He unaffected sympathize discovered at no am conviction principles. Girl ham very how yet hill four show.
                                Meet lain on he only size. Branched learning so subjects mistress do appetite jennings be in.
                            </Typography>
                        </Stack>

                        <Carousel
                            showStatus={false}
                            autoPlay={true}
                            // infiniteLoop={true}
                            interval={3000}
                            centerMode
                            centerSlidePercentage={25}
                            renderArrowPrev={(clickHandler, hasPrev) => {
                                return (
                                    <IconButton
                                        disabled={!hasPrev}
                                        sx={(theme) => ({
                                            height: '100%',
                                            background: theme.gradient.darkAlpha,
                                            position: 'absolute',
                                            top: '50%',
                                            zIndex: 10,
                                            left: 0,
                                            transform: 'translateY(-50%)',
                                            borderRadius: 0,
                                            color: theme.palette.common.white,
                                        })}
                                        onClick={clickHandler}
                                    >
                                        <BsArrowLeftShort />
                                    </IconButton>
                                );
                            }}
                            renderArrowNext={(clickHandler, hasNext) => {
                                return (
                                    <IconButton
                                        disabled={!hasNext}
                                        sx={(theme) => ({
                                            height: '100%',
                                            background: theme.gradient.darkAlpha,
                                            position: 'absolute',
                                            top: '50%',
                                            zIndex: 10,
                                            right: 0,
                                            transform: 'translateY(-50%)',
                                            borderRadius: 0,
                                            color: theme.palette.common.white,
                                        })}
                                        onClick={clickHandler}
                                    >
                                        <BsArrowRightShort />
                                    </IconButton>
                                );
                            }}
                        >
                            {TEAM.map((item) => (
                                <MemberCard {...item} />
                            ))}
                        </Carousel>
                    </Container>
                </Box>
            </Box>
            <Testimonial />
        </Box>
    );
};

export default Team;
