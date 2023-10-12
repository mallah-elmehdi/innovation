import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { TestimonialCard, Title } from '../../components';
import { TESTIMONIAL } from '../../constants/landing';
import { NAVBAR_PAGES } from '../../constants/navbar';
import Bg from '../../assets/background/squares.png';

const Testimonial = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'left',
                backgroundSize: 'cover',
            }}
        >
            <Box
                sx={(theme) => ({
                    // background: theme.gradient.darkAlpha,
                    py: 10,
                })}
            >
                <Container sx={{ alignSelf: 'center' }} id={NAVBAR_PAGES[6].id}>
                    <Title black>{NAVBAR_PAGES[6].title}</Title>
                    <Stack spacing={3} mb={10}>
                        <Typography
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.bold,
                                color: theme.palette.common.black,
                                fontSize: theme.fontSize['4xl'],
                            })}
                        >
                            Settled wishing ability musical may another set age.
                        </Typography>
                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.common.black,
                                fontSize: theme.fontSize.lg,
                                lineHeight: 2,
                            })}
                        >
                            He unaffected sympathize discovered at no am conviction principles. Girl ham very how yet hill four show. Meet
                            lain on he only size. Branched learning so subjects mistress do appetite jennings be in.
                        </Typography>
                    </Stack>

                    <Grid container spacing={5}>
                        {TESTIMONIAL.map((item) => (
                            <Grid item md={4} sm={6}>
                                <TestimonialCard {...item} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Testimonial;
