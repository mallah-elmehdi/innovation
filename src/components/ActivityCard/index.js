import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card } from '..';

const ActivityCard = ({ title, description, image, icon }) => {
    return (
        <Box>
            <Card
                sx={(theme) => ({
                    position: 'relative',
                    overflow: 'visible',
                    mb: 7,
                    minHeight: '12rem',
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
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
                        // opacity: 0.7,
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
                    <Stack spacing={1}>
                        <Typography
                            sx={(theme) => ({
                                textAlign: 'center',
                                fontWeight: theme.fontWeight.medium,
                                color: theme.palette.primary.main,
                                fontSize: theme.fontSize.sm,
                            })}
                        >
                            {title}
                        </Typography>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.xs,
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.secondary.dark,
                                textAlign: 'center',
                            })}
                        >
                            {description}
                        </Typography>
                    </Stack>
                </Card>
                <Stack justifyContent="center" alignItems="center" height="100%">
                    <Avatar
                        src={icon}
                        sx={(theme) => ({
                            boxShadow: theme.shadows.default,
                            backgroundColor: theme.palette.primary.dark,
                            p: 2,
                            width: 80,
                            height: 80,
                        })}
                    />
                </Stack>
            </Card>
        </Box>
    );
};

export default ActivityCard;
