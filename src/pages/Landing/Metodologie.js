import { Avatar, Box, Container, Divider, Fade, Grow, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Card, Title } from '../../components';
import { METODOLOGIE } from '../../constants/landing';
import { NAVBAR_PAGES } from '../../constants/navbar';
import Image from '../../assets/landing/stats.jpg';
import { motion } from 'framer-motion';

const Metodologie = () => {
    // ---------- choose
    const [methodOld, setMethodOld] = useState(0);
    const [method, setMethod] = useState(0);
    const handleMethod = (index) => setMethod(index);
    const handleMethodOld = (index) => setMethodOld(index);

    // ----------

    return (
        <Container sx={{ alignSelf: 'center' }} id={NAVBAR_PAGES[4].id}>
            <Title>{NAVBAR_PAGES[4].title}</Title>
            <Box display="flex" gap={4} justifyContent="center" mb={5}>
                {METODOLOGIE.map((item, index) => (
                    <>
                        <motion.div
                            style={{ height: '100%', cursor: 'pointer' }}
                            onHoverStart={() => {
                                handleMethodOld(index);
                            }}
                            onHoverEnd={() => {
                                handleMethodOld(method);
                            }}
                            onClick={() => {
                                handleMethod(index);
                            }}
                        >
                            <Stack spacing={3} alignItems="center">
                                <Avatar
                                    sx={(theme) => ({
                                        backgroundColor: theme.palette.primary.main,
                                        fontSize: theme.fontSize['4xl'],
                                        width: 60,
                                        height: 60,
                                    })}
                                >
                                    {item.icon}
                                </Avatar>
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: theme.fontSize.xl,
                                        color: theme.palette.common.dark,
                                        lineHeight: 1,
                                    })}
                                >
                                    {item.title}
                                </Typography>
                                <Divider
                                    sx={(theme) => ({
                                        width: '100%',
                                        border: '1px solid',
                                        borderColor: theme.palette.primary.secondary,
                                        opacity: methodOld === index || method === index ? 1 : 0,
                                        transition: 'all 0.5s ease',
                                    })}
                                />
                            </Stack>
                        </motion.div>
                        <Divider
                            orientation="vertical"
                            sx={(theme) => ({
                                height: 60,
                                alignSelf: 'center',
                                borderColor: theme.palette.muted.main,
                            })}
                        />
                    </>
                ))}
            </Box>
            <Box>
                <Card
                    sx={(theme) => ({
                        position: 'relative',
                        overflow: 'visible',
                        mb: 7,
                        height: 400,
                        backgroundImage: `url(${METODOLOGIE[method].image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        transition: 'all 0.3s ease',
                    })}
                >
                    <Box
                        position="absolute"
                        width="100%"
                        height="100%"
                        top="50%"
                        right="50%"
                        sx={(theme) => ({
                            transform: 'translate(50%, -50%)',
                            background: theme.gradient.darkAlpha,
                        })}
                    />
                    <Card
                        sx={(theme) => ({
                            position: 'absolute',
                            top: '100%',
                            right: '50%',
                            transform: 'translate(50%, -50%)',
                            width: '80%',
                            height: 'fit-content',
                        })}
                    >
                        {METODOLOGIE.map((item, index) => (
                            <>
                                {index === method && (
                                    <Fade in={true} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
                                        <Typography
                                            sx={(theme) => ({
                                                textAlign: 'justify',
                                                fontWeight: theme.fontWeight.light,
                                                color: theme.palette.common.black,
                                                fontSize: theme.fontSize.lg,
                                            })}
                                        >
                                            {METODOLOGIE[method].description}
                                        </Typography>
                                    </Fade>
                                )}
                            </>
                        ))}
                    </Card>
                </Card>
            </Box>
            {/* <Box
                sx={{
                    backgroundImage: `url(${Bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    height: 300,
                    position: 'relative',
                }}
            >
                <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    top="50%"
                    right="50%"
                    sx={(theme) => ({
                        transform: 'translate(50%, -50%)',
                        background: theme.gradient.primaryDarkAlpha,
                    })}
                />
                <Box position="absolute" width="100%" top="55%" right="50%" zIndex={10} sx={{ transform: 'translate(50%, -50%)' }}>
                    <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.bold,
                            fontSize: theme.fontSize['xl'],
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            mb: 3,
                        })}
                    >
                        Empowering Rural Agriculture through Family Cooperatives
                    </Typography>
                </Box>
            </Box> */}
        </Container>
    );
};

export default Metodologie;
