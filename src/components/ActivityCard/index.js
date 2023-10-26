import { Avatar, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Card } from '..';
import { motion } from 'framer-motion';

const ActivityCard = ({ title, description, image, icon }) => {
    // ----- chnage color when hover
    const [hover, setHover] = useState(false);
    const handleHoverOn = () => setHover(true);
    const handleHoverOff = () => setHover(false);

    return (
        <motion.div onHoverStart={handleHoverOn} onHoverEnd={handleHoverOff}>
            <Card
                sx={(theme) => ({
                    position: 'relative',
                    overflow: 'visible',
                    cursor: 'pointer',
                    p: 5,
                    transition: 'all 0.3s ease',
                    // backgroundColor: hover ? theme.palette.primary.dark : theme.palette.common.white,
                    backgroundColor: theme.palette.common.white,
                })}
            >
                <Avatar
                    variant="square"
                    src={icon}
                    sx={(theme) => ({
                        boxShadow: hover ? 'none' : theme.shadows.default,
                        backgroundColor: hover ? theme.palette.primary.secondary : theme.palette.primary.dark,
                        p: 1,
                        width: 60,
                        height: 60,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: hover ? 'translate(-50%, -50%) scale(1.125) ' : 'translate(-50%, -50%)',
                        zIndex: 30,
                        transition: 'all 0.3s ease',
                    })}
                />

                <Stack spacing={1} height="100%" justifyContent="center">
                    <Typography
                        sx={(theme) => ({
                            textAlign: 'center',
                            fontWeight: theme.fontWeight.medium,
                            // color: hover ? theme.palette.common.white : theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            fontSize: theme.fontSize.sm,
                            transition: 'all 0.3s ease',
                        })}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.xs,
                            fontWeight: theme.fontWeight.light,
                            // color: hover ? theme.palette.common.white : theme.palette.secondary.dark,
                            color: theme.palette.secondary.dark,
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                        })}
                    >
                        {description}
                    </Typography>
                </Stack>
            </Card>
        </motion.div>
    );
};

export default ActivityCard;
