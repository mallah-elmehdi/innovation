import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { PiQuotesFill } from 'react-icons/pi';
import { Card } from '..';

const TestimonialCard = ({ name, title, comment, image }) => {
    return (
        <Card
            sx={(theme) => ({
                position: 'relative',
                borderTopRightRadius: theme.borderRadius['3xl'],
                borderTopLeftRadius: theme.borderRadius['3xl'],
                borderBottomLeftRadius: theme.borderRadius['3xl'],
                p: 1,
                overflow: 'visible',
                backgroundColor: theme.palette.primary.dark,
            })}
        >
            <Avatar
                sx={(theme) => ({
                    position: 'absolute',
                    bottom: '100%',
                    right: '50%',
                    transform: 'translate(50%, 50%)',
                    width: 80,
                    height: 80,
                    border: '3px solid',
                    borderColor: theme.palette.common.white,
                    zIndex: 10,
                })}
                src={image}
            />
            <Box
                sx={(theme) => ({
                    px: 4,
                    py: 7,
                    border: '1px solid',
                    borderColor: theme.palette.common.white,
                    borderTopRightRadius: theme.borderRadius['3xl'],
                    borderTopLeftRadius: theme.borderRadius['3xl'],
                    borderBottomLeftRadius: theme.borderRadius['3xl'],
                    position: 'relative',
                })}
            >
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
                <Stack>
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
