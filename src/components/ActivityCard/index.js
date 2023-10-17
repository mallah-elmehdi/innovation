import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card } from '..';

const ActivityCard = ({ title, description, image, icon }) => {
    return (
        <Card
            sx={(theme) => ({
                position: 'relative',
                overflow: 'visible',
            })}
        >
            <Avatar
                variant="square"
                src={icon}
                sx={(theme) => ({
                    boxShadow: theme.shadows.default,
                    backgroundColor: theme.palette.primary.dark,
                    p: 1,
                    width: 60,
                    height: 60,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 30,
                })}
            />

            <Stack spacing={1} height="100%" justifyContent="center">
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
    );
};

export default ActivityCard;
