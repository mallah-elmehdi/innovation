import { Box, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';
import { dateFormattingTxt } from '../../utils/utils';

export const Category = ({ category }) => {
    return (
        <Box display="flex" alignItems="center" gap={0.5}>
            <Typography
                sx={(theme) => ({
                    textTransform: 'uppercase',
                    fontSize: theme.fontSize.xs,
                    fontWeight: theme.fontWeight.light,
                    color: theme.palette.primary.secondary,
                })}
            >
                {category}
            </Typography>
            <Box
                sx={(theme) => ({
                    p: 0.25,
                    backgroundColor: theme.palette.primary.dark,
                    borderRadius: theme.borderRadius.full,
                })}
            />
        </Box>
    );
};

const BlogCard = (props) => {
    const { mainImage, publishedAt, title, categories } = props;

    return (
        <Box
            sx={(theme) => ({
                boxShadow: theme.shadows.default,
                width: '100%',
                borderRadius: theme.borderRadius.xs,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            })}
        >
            <Box position="relative">
                <CardMedia
                    image={mainImage?.asset?.url}
                    sx={(theme) => ({
                        borderTopRightRadius: theme.borderRadius.md,
                        borderTopLeftRadius: theme.borderRadius.md,
                        height: { md: 200, sm: 150, xs: 180 },
                    })}
                />
                <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    top="50%"
                    right="50%"
                    sx={(theme) => ({
                        transform: 'translate(50%, -50%)',
                        background: theme.gradient.background.darkAlpha,
                        borderTopRightRadius: theme.borderRadius.md,
                        borderTopLeftRadius: theme.borderRadius.md,
                    })}
                />
            </Box>
            <Stack p={3} flexGrow={1}>
                <Stack direction="row" gap={1.25} mb={1.25} flexWrap="wrap">
                    {categories?.map((item) => (
                        <Category category={item.title} />
                    ))}
                </Stack>

                <Typography
                    component="h1"
                    sx={(theme) => ({
                        fontWeight: theme.fontWeight.bold,
                        textTransform: 'capitalize',
                        fontSize: theme.fontSize.md,
                        color: theme.palette.common.black,
                        mb: 5,
                        flexGrow: 1,
                    })}
                >
                    {title}
                </Typography>
                <Typography
                    component="i"
                    sx={(theme) => ({
                        textTransform: 'uppercase',
                        fontSize: theme.fontSize.xs,
                        fontWeight: theme.fontWeight.light,
                        color: theme.palette.grey['600'],
                        mt: 'auto',
                    })}
                >
                    {dateFormattingTxt(publishedAt)}
                </Typography>
            </Stack>
        </Box>
    );
};

export default BlogCard;
