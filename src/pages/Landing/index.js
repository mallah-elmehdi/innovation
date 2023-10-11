import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Activities from './Activities';
import Header from './Header';
import Stats from './Stats';
import AboutUs from './AboutUs';
import Metodologie from './Metodologie';

const Landing = () => {
    const { hash } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 150,
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            }, 0);
        }
    }, [hash]);
    return (
        <>
            <Stack spacing={10}>
                <Header />
                <AboutUs />
                <Activities />
                <Stats />
                <Metodologie />
            </Stack>
        </>
    );
};

export default Landing;
