import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const Title = ({ children, white }) => {
    return (
        <Stack direction="row" spacing={2} alignItems="center" mb={5}>
            <Divider
                sx={(theme) => ({
                    width: '100%',
                    border: '1px solid',
                    borderColor: white ? theme.palette.common.white : theme.palette.primary.secondary,
                    maxWidth: '4rem',
                })}
            />
            <Typography
                component="span"
                sx={(theme) => ({
                    fontSize: theme.fontSize['xl'],
                    fontWeight: theme.fontWeight.normal,
                    color: white ? theme.palette.common.white : theme.palette.primary.main,
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    letterSpacing: 2.5,
                })}
            >
                {children}
            </Typography>
        </Stack>
    );
};

export default Title;
