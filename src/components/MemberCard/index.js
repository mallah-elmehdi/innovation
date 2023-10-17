import { Box, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';

const MemberCard = ({ image, name, title }) => {
    return (
        <Box
            mx={0.25}
            sx={(theme) => ({
                p: 1,
                backgroundColor: theme.palette.common.white,
            })}
        >
            <Stack
                position="relative"
                className="item"
                sx={(theme) => ({
                    p: 1,
                    border: '1px solid',
                    borderColor: theme.palette.primary.secondary,
                    backgroundColor: theme.palette.common.white,
                })}
            >
                <Box />
                <CardMedia
                    sx={(theme) => ({
                        height: { sm: 200, xs: 200 },
                        backgroundPosition: 'top',
                        // backgroundSize: 'contain',
                    })}
                    image={image}
                />
                <Box
                    sx={(theme) => ({
                        backgroundColor: theme.palette.common.white,
                        flexGrow: 1,
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
                </Box>
            </Stack>
        </Box>
    );
};

export default MemberCard;
