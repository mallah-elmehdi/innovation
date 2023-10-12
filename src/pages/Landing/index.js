import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from './AboutUs';
import Activities from './Activities';
import Header from './Header';
import Metodologie from './Metodologie';
import Partenaires from './Partenaires';
import Stats from './Stats';
import Team from './Team';
import { Footer } from '../../components';

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
                <Team />
                <Partenaires />
                <Footer />
            </Stack>
        </>
    );
};

export default Landing;
