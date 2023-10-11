import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { ActivityCard, Title } from '../../components';
import { ACTIVITIES } from '../../constants/landing';
import { NAVBAR_PAGES } from '../../constants/navbar';
import Bg from '../../assets/background/polygon-scatter-haikei-1.png';

const Activities = () => {
    return (
        <Box
            id={NAVBAR_PAGES[2].id}
            sx={{
                position: 'relative',
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center left',
                backgroundSize: 'contain',
            }}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title>{NAVBAR_PAGES[2].title}</Title>
                <Grid container spacing={5} justifyContent="center">
                    {ACTIVITIES.map((item) => (
                        <Grid item md={4} xs={12}>
                            <ActivityCard {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Activities;
