import { AppBar, Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Logo } from '..';

const Footer = () => {
    return (
        <Box
            sx={(theme) => ({
                // background: theme.gradient.secondaryAlpha,
                py: 5,
            })}
        >
            <Container>
                <AppBar
                    position="static"
                    sx={(theme) => ({
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                    })}
                >
                    <Container>
                        <Stack spacing={3} alignItems="center">
                            <Box width="fit-content">
                                <Logo lg square />
                            </Box>
                            <Typography
                                sx={(theme) => ({
                                    // color: theme.palette.common.white,
                                    color: theme.palette.grey[600],
                                    fontWeight: theme.fontWeight.light,
                                    fontSize: theme.fontSize.xs,
                                    textAlign: 'center',
                                })}
                            >
                                Use of this site constitutes acceptance of our User Agreement and Privacy Policy.
                            </Typography>
                        </Stack>
                    </Container>
                </AppBar>
            </Container>
        </Box>
    );
};

export default Footer;
