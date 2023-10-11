import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card } from '..';

const MemberCard = ({ image, name, title }) => {
    return (
        <Box>
            <Card
                sx={(theme) => ({
                    position: 'relative',
                    overflow: 'visible',
                    mb: 7,
                    // width: 300,
                    height: 250,
                    width: 250,
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                })}
            >
                {/* <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    top="50%"
                    right="50%"
                    sx={(theme) => ({
                        transform: 'translate(50%, -50%)',
                        background: theme.gradient.darkAlpha,
                        // opacity: 0.7,
                    })}
                /> */}
                <Card
                    sx={(theme) => ({
                        position: 'absolute',
                        top: '100%',
                        right: '50%',
                        transform: 'translate(50%, -50%)',
                        width: '80%',
                        height: 'fit-content',
                        p: 1,
                    })}
                >
                    <Stack spacing={0.25}>
                        <Typography
                            sx={(theme) => ({
                                textAlign: 'center',
                                fontWeight: theme.fontWeight.medium,
                                color: theme.palette.primary.main,
                                fontSize: theme.fontSize.sm,
                            })}
                        >
                            {name}
                        </Typography>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.xs,
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.secondary.dark,
                                textAlign: 'center',
                            })}
                        >
                            {title}
                        </Typography>
                    </Stack>
                </Card>
            </Card>
        </Box>
    );
};

export default MemberCard;
