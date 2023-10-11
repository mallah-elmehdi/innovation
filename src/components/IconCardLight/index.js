import { Box, alpha } from '@mui/material';
import React from 'react';

const IconCard = ({ icon, color }) => {
    return (
        <Box
            sx={(theme) => ({
                borderRadius: theme.borderRadius.xl,
                backgroundColor: alpha(theme.palette[color ? color : 'primary'].main, 0.1),
                padding: theme.spacing(2),
                lineHeight: 0,
                color: theme.palette[color ? color : 'primary'].main,
                transform: 'rotate(10deg)',
                fontSize: theme.fontSize['3xl'],
            })}
        >
            <Box sx={{ transform: 'rotate(-10deg)' }}>{icon}</Box>
        </Box>
    );
};

export default IconCard;
