import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { PiQuotesFill } from 'react-icons/pi';
import { Card } from '..';

const TestimonialCard = ({ name, title, comment, image }) => {
    return (
        <Card
            sx={(theme) => ({
                position: 'relative',
                p: 1.5,
                overflow: 'visible',
                backgroundColor: theme.palette.primary.dark,
            })}
            className="item"
        >
            <Box
                sx={(theme) => ({
                    px: 4,
                    pb: 7,
                    pt: 3,
                    border: '1px solid',
                    borderColor: theme.palette.common.white,
                    position: 'relative',
                })}
            >
                <Avatar
                    sx={(theme) => ({
                        width: 80,
                        height: 80,
                        border: '1px solid',
                        borderColor: theme.palette.common.white,
                        mx: 'auto',
                        mb: 3,
                    })}
                    src={image}
                ></Avatar>

                <Stack>
                    <Avatar
                        sx={(theme) => ({
                            position: 'absolute',
                            fontSize: theme.fontSize['6xl'],
                            color: theme.palette.common.white,
                            bottom: 0,
                            right: 0,
                            width: 70,
                            height: 70,
                            background: 'transparent',
                            transform: 'rotate(26deg)',
                        })}
                    >
                        <PiQuotesFill />
                    </Avatar>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.xl,
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: theme.fontWeight.bold,
                            mb: 0.25,
                        })}
                    >
                        {name}
                    </Typography>
                    <Typography
                        component="i"
                        sx={(theme) => ({
                            fontSize: theme.fontSize.sm,
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: theme.fontWeight.light,
                            mb: 3,
                        })}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.md,
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: theme.fontWeight.light,
                        })}
                    >
                        {comment}
                    </Typography>
                </Stack>
            </Box>
        </Card>
    );
};

export default TestimonialCard;
