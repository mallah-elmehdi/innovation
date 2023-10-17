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
                <Title>Nos Activités</Title>
                <Grid container spacing={6} mt={3} justifyContent="center">
                    {ACTIVITIES.map((item) => (
                        <Grid item sm={5} xs={11}>
                            <ActivityCard {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Activities;
