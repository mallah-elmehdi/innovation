import { Avatar, Stack } from '@mui/material';
import React from 'react';
import { Link } from '..';
import { SOCIALS } from '../../constants/socials';

const Socials = () => {
    return (
        <Stack
            sx={{
                position: 'fixed',
                top: '50%',
                right: 0,
                transform: 'translate(0, -50%)',
                zIndex: 100,
            }}
            spacing={1}
        >
            {SOCIALS.map((item) => (
                <Link to={item.link} target="_blank">
                    <Avatar
                        variant="square"
                        sx={{
                            background: item.background,
                        }}
                    >
                        {item.icon}
                    </Avatar>
                </Link>
            ))}
        </Stack>
    );
};

export default Socials;
