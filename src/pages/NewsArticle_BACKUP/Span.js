import React from 'react';
import { Typography } from '@mui/material';

const Span = (span) => {
    if (span._type === 'span') {
        if (span.marks.includes('strong')) {
            return (
                <Typography
                    component="strong"
                    key={span._key}
                    sx={(theme) => ({
                        fontSize: theme.fontSize.sm,
                        fontWeight: theme.fontWeight.bold,
                        color: theme.palette.common.black,
                        lineHeight: 2,
                    })}
                >
                    {span.text}
                </Typography>
            );
        } else if (span.marks.includes('em')) {
            return (
                <Typography
                    component="em"
                    key={span._key}
                    sx={(theme) => ({
                        fontSize: theme.fontSize.sm,
                        fontWeight: theme.fontWeight.light,
                        color: theme.palette.common.black,
                        lineHeight: 2,
                    })}
                >
                    {span.text}
                </Typography>
            );
        } else {
            return (
                <Typography
                    component="span"
                    key={span._key}
                    sx={(theme) => ({
                        fontSize: theme.fontSize.sm,
                        fontWeight: theme.fontWeight.light,
                        color: theme.palette.common.black,
                        lineHeight: 2,
                    })}
                >
                    {span.text}
                </Typography>
            );
        }
    } else {
        return null;
    }
};

export default Span;
