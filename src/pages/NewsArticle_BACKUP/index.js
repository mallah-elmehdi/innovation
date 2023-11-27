import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sanityClient } from '../../api/sanity';
import { Footer, Img, Navbar } from '../../components';
import { Category } from '../../components/BlogCard';
import { dateFormattingTxtFull } from '../../utils/functions';
import Block from './Block';
import Image from './Image';

const NewsArticle = () => {
    // ========== CHANGE PAGE INFO
    const { slug } = useParams();

    // -------------
    const [blog, setBlog] = useState([]);

    // -------------
    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"] {
             title,
             slug,
             body,
             publishedAt,
             mainImage {
               asset -> {
                 _id,
                 url,
               },
               alt
             },
             "author": author -> {
                name,
                bio,
                image {
                    asset -> {
                        _id,
                        url,
                      },
                }
             },
             "categories": categories[]->
           }`
            )
            .then(async (data) => {
                console.log('->>>>>', data);

                if (data[0]) {
                    setBlog(data[0]);
                    // setBlog(() => {
                    //     // var index = 0;
                    //     return {
                    //         ...data[0],
                    //         // body: data[0].body.map((item) => {
                    //         //     if (item._type === 'image') {
                    //         //         return {
                    //         //             ...item,
                    //         //             index: index++,
                    //         //         };
                    //         //     }
                    //         //     return item;
                    //         // }),
                    //     };
                    // });
                    // setImages(await handleFetchImage(handleExtractImage(data[0].body)));
                    // setAlt(handleExtractAlts(data[0].body));
                }
            })
            .catch(console.error);
    }, [slug]);

    // const handleExtractImage = (blocks) => {
    //     const imageReferences = [];
    //     blocks.forEach((block) => {
    //         if (block._type === 'image' && block.asset) {
    //             imageReferences.push(block.asset._ref);
    //         }
    //     });
    //     return imageReferences;
    // };

    // const handleFetchImage = async (references) => {
    //     const images = await sanityClient.fetch(`*[_id in ${JSON.stringify(references)}]{_id, url}`);
    //     return images.map((image) => image.url).reverse();
    // };

    // // --------------- alt
    // const handleExtractAlts = (blocks) => {
    //     const alts = [];
    //     blocks.forEach((block) => {
    //         if (block.children && block.children[0] && block.children[0].text && block.children[0].text.split(':')[0].trim() === '[ALT]') {
    //             alts.push(block.children[0].text.split(':')[1].trim());
    //         }
    //     });
    //     return alts;
    // };

    return (
        <Stack spacing={5}>
            <Navbar />
            <Container maxWidth="md" sx={{ alignSelf: 'center' }}>
                <Stack>
                    <Typography
                        component="h1"
                        sx={(theme) => ({
                            fontSize: theme.fontSize['4xl'],
                            color: theme.palette.primary.main,
                            fontWeight: theme.fontWeight.bold,
                            mb: 5,
                        })}
                    >
                        {blog?.title}
                    </Typography>
                    <Box display="flex" gap={1} alignItems="center" mb={2}>
                        <Avatar
                            sx={(theme) => ({
                                width: 50,
                                height: 50,
                                p: 0.5,
                                border: '0.5px solid',
                                borderColor: theme.palette.primary.main,
                            })}
                            src={blog?.author?.image?.asset?.url}
                        />

                        <Stack spacing={0.25}>
                            <Typography
                                component="h1"
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.xs,
                                    color: theme.palette.grey[700],
                                    fontWeight: theme.fontWeight.light,
                                })}
                            >
                                BY{' '}
                                <Typography
                                    component="span"
                                    sx={(theme) => ({
                                        textTransform: 'uppercase',
                                        fontSize: theme.fontSize.xs,
                                        color: theme.palette.primary.main,
                                        fontWeight: theme.fontWeight.bold,
                                    })}
                                >
                                    {blog?.author?.name}
                                </Typography>
                            </Typography>
                            <Typography
                                component="i"
                                sx={(theme) => ({
                                    textTransform: 'uppercase',
                                    fontSize: theme.fontSize.xs,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.grey['600'],
                                })}
                            >
                                {dateFormattingTxtFull(blog?.publishedAt)}
                            </Typography>
                        </Stack>
                    </Box>
                    <Img
                        src={blog?.mainImage?.asset?.url}
                        sx={(theme) => ({
                            borderRadius: theme.borderRadius.xs,
                        })}
                    />
                    <Stack direction="row" gap={1.25} mt={1.25} flexWrap="wrap">
                        {blog?.categories && blog?.categories.map((item) => <Category category={item.title} />)}
                    </Stack>
                    {blog?.body && (
                        <Stack spacing={2} mt={5}>
                            {blog.body.map((item) => {
                                if (item._type === 'block') {
                                    return <>{Block(item)}</>;
                                } else if (item._type === 'image') {
                                    return <Image item={item} />;
                                } else {
                                    return null;
                                }
                            })}
                        </Stack>
                    )}
                    {/* {blog?.body && (
                        <Stack spacing={2} mt={5}>
                            {blog.body.map((item) => {
                                if (item.listItem && item.listItem === 'bullet') {
                                    return (
                                        <>
                                            {item?.children.map((text) => (
                                                <Typography
                                                    component="li"
                                                    sx={(theme) => ({
                                                        // textTransform: 'lowercase',
                                                        pl: 2,
                                                        fontSize: theme.fontSize.sm,
                                                        fontWeight:
                                                            text.marks[0] && text.marks[0] === 'strong'
                                                                ? theme.fontWeight.bold
                                                                : theme.fontWeight.light,
                                                        color: theme.palette.common.black,
                                                    })}
                                                >
                                                    {text.text}
                                                </Typography>
                                            ))}
                                        </>
                                    );
                                } else if (
                                    item.children &&
                                    item.children[0] &&
                                    item.children[0].text &&
                                    item.children[0].text.split(':')[0].trim() === '[VIDEO]'
                                ) {
                                    return <VideoPlayer videoId={item.children[0].text.split(':')[1].trim()} />;
                                } else if (
                                    item._type !== 'image' &&
                                    item.children &&
                                    item.children[0] &&
                                    item.children[0].text &&
                                    item.children[0].text.split(':')[0].trim() !== '[ALT]'
                                ) {
                                    return (
                                        <>
                                            {item?.children.map((text) =>
                                                text.marks[0] && item.markDefs[0] && text.marks[0] === item.markDefs[0]._key ? (
                                                    <ButtonLink
                                                        underline="always"
                                                        href={item.markDefs[0].href}
                                                        target="_blank"
                                                        sx={(theme) => ({
                                                            fontSize: theme.fontSize.lg,
                                                            color: theme.palette.primary.main,
                                                        })}
                                                    >
                                                        {text.text}
                                                    </ButtonLink>
                                                ) : (
                                                    <Typography
                                                        component={text.marks[0] && !parseInt(text.marks[0][0]) ? text.marks[0] : 'span'}
                                                        sx={(theme) => ({
                                                            // textTransform: 'lowercase',
                                                            fontSize: theme.fontSize.lg,
                                                            lineHeight: 2,
                                                            fontWeight:
                                                                text.marks[0] && text.marks[0] === 'strong'
                                                                    ? theme.fontWeight.bold
                                                                    : theme.fontWeight.light,
                                                            color: theme.palette.common.black,
                                                        })}
                                                    >
                                                        {text.text}
                                                    </Typography>
                                                )
                                            )}
                                        </>
                                    );
                                } else if (item._type === 'image') {
                                    return (
                                        <Img src={images[item.index]} alt={alt.length >= item.index + 1 ? alt[item.index] : blog?.title} />
                                    );
                                }

                                return '';
                            })}
                        </Stack>
                    )} */}
                </Stack>
            </Container>
            <Footer />
        </Stack>
    );
};

export default NewsArticle;
