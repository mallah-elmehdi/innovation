import { Avatar, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Title } from '../../components';
import { METODOLOGIE } from '../../constants/landing';
import { NAVBAR_PAGES } from '../../constants/navbar';

const Metodologie = () => {
    return (
        <Container sx={{ alignSelf: 'center' }} id={NAVBAR_PAGES[3].id}>
            <Title>Notre Méthodologie</Title>
            <Typography
                sx={(theme) => ({
                    fontSize: theme.fontSize.md,
                    color: theme.palette.common.black,
                    fontWeight: theme.fontWeight.light,
                    lineHeight: 2,
                    textAlign: 'justify',
                    mb: 5,
                })}
            >
                Nous rassemblons des équipes multidisciplinaires composées de chercheurs, de professionnels et d'agents de développement. En
                collaboration avec les populations et les parties prenantes, nous identifions les besoins socio-économiques, co-créons des
                solutions innovantes et à fort impact, et assurons une surveillance continue pour garantir la Pérennisation de nos actions.
            </Typography>
            <Grid container spacing={3}>
                {METODOLOGIE.map((item, index) => (
                    <Grid item md={3} sm={6} xs={12}>
                        <Stack spacing={3} alignItems="center">
                            <Avatar
                                variant="square"
                                sx={(theme) => ({
                                    backgroundColor: theme.palette.primary.dark,
                                    p: 1,
                                    width: 60,
                                    height: 60,
                                })}
                            >
                                {item.icon}
                            </Avatar>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.md,
                                    color: theme.palette.common.black,
                                    fontWeight: theme.fontWeight.light,
                                    lineHeight: 1,
                                })}
                            >
                                {item.title}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Metodologie;
