import { Typography } from '@mui/material';
import React from 'react';
import { ButtonLink } from '../../components';

const Link = ({ markDefs, text }) => {
    const href = markDefs[0].href;

    return (
        <Typography>
            <ButtonLink
                underline="always"
                href={href}
                key={markDefs[0]._key}
                target="_blank"
                sx={(theme) => ({
                    fontSize: theme.fontSize.lg,
                    color: theme.palette.primary.main,
                })}
            >
                {text}
            </ButtonLink>
        </Typography>
    );
};

export default Link;
