import { Avatar, Stack } from '@mui/material';
import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import { SOCIALS } from '../../constants/socials';
import { Link } from '..';

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
