import { Avatar, Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Bg from '../../assets/background/polygon-scatter-haikei-4.png';
import Author from '../../assets/news/authors/sil.png';
import Image1 from '../../assets/news/news-assets/Projet_TSRDQ/1.JPG';
import Image2 from '../../assets/news/news-assets/Projet_TSRDQ/2.JPG';
import Image3 from '../../assets/news/news-assets/Projet_TSRDQ/3.JPG';
import Image4 from '../../assets/news/news-assets/Projet_TSRDQ/4.JPG';
import Image5 from '../../assets/news/news-assets/Projet_TSRDQ/5.jpg';
import { Card, Footer, Navbar, VideoPlayer } from '../../components';
import { Category } from '../../components/BlogCard';
import { dateFormattingTxtFull } from '../../utils/functions';
// -------
import { BsArrowRight } from 'react-icons/bs';
import Image10 from '../../assets/news/news-assets/Projet_TSRDQ/10.jpg';
import Image11 from '../../assets/news/news-assets/Projet_TSRDQ/11.JPG';
import Image12 from '../../assets/news/news-assets/Projet_TSRDQ/12.jpg';
import Image13 from '../../assets/news/news-assets/Projet_TSRDQ/13.jpg';
import Image14 from '../../assets/news/news-assets/Projet_TSRDQ/14.JPG';
import Image15 from '../../assets/news/news-assets/Projet_TSRDQ/15.jpg';
import Image16 from '../../assets/news/news-assets/Projet_TSRDQ/16.jpg';
import Image17 from '../../assets/news/news-assets/Projet_TSRDQ/17.jpg';
import Image6 from '../../assets/news/news-assets/Projet_TSRDQ/6.JPG';
import Image7 from '../../assets/news/news-assets/Projet_TSRDQ/7.jpg';
import Image9 from '../../assets/news/news-assets/Projet_TSRDQ/9.jpg';

const IMAGES = [Image1, Image2, Image3, Image4, Image5];
const IMAGES2 = [Image6, Image7, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17];
const STEPS = [
    {
        title: 'Renforcement des capacités',
        description:
            "Dans des pratiques agricoles efficaces, l'utilisation et la gestion correctes des moyens de production tels que les semences et les engrais.",
    },
    {
        title: 'Réseaux de ressources',
        description:
            "Liens avec des fournisseurs et d'autres coopératives, garantissant un approvisionnement régulier en intrants nécessaires.",
    },
    {
        title: 'Autonomisation financière',
        description: "En améliorant la productivité et la diversification de l'agriculture- Analyse des chaines de valeurs.",
    },
    {
        title: 'Approches communautaires',
        description: 'Achats groupés et stratégies de négociation collective',
    },
];

const NewsArticle = () => {
    // --- carosselle
    const options = {
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        // nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    };
    return (
        <Stack spacing={5}>
            <Box>
                <Navbar />
                <Box
                    sx={(theme) => ({
                        backgroundColor: theme.palette.primary.dark,
                    })}
                >
                    <Container maxWidth="md" sx={{ alignSelf: 'center' }}>
                        <Box
                            sx={(theme) => ({
                                backgroundImage: `url(${Bg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right bottom',
                                backgroundSize: '10rem',
                            })}
                        >
                            <Box py={10}>
                                <Stack spacing={3}>
                                    <Typography
                                        component="h1"
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize['4xl'],
                                            color: theme.palette.common.white,
                                            fontWeight: theme.fontWeight.bold,
                                            mb: 5,
                                        })}
                                    >
                                        Promouvoir la Croissance Inclusive et la Durabilité en Agriculture : Sélection des Moments Clés du
                                        SIL 2022
                                    </Typography>
                                    <Box display="flex" gap={1} alignItems="center" mb={2}>
                                        <Avatar
                                            sx={(theme) => ({
                                                width: 50,
                                                height: 50,
                                                p: 0.5,
                                                border: '0.5px solid',
                                                borderColor: theme.palette.primary.main,
                                                backgroundColor: theme.palette.common.white,
                                            })}
                                            src={Author}
                                        />

                                        <Stack spacing={0.25}>
                                            <Typography
                                                component="h1"
                                                sx={(theme) => ({
                                                    fontSize: theme.fontSize.xs,
                                                    color: theme.palette.common.white,
                                                    fontWeight: theme.fontWeight.light,
                                                })}
                                            >
                                                BY{' '}
                                                <Typography
                                                    component="span"
                                                    sx={(theme) => ({
                                                        textTransform: 'uppercase',
                                                        fontSize: theme.fontSize.xs,
                                                        color: theme.palette.common.white,
                                                        fontWeight: theme.fontWeight.bold,
                                                    })}
                                                >
                                                    SOCIAL INNOVATION LAB
                                                </Typography>
                                            </Typography>
                                            {/* <Typography
                                                component="i"
                                                sx={(theme) => ({
                                                    textTransform: 'uppercase',
                                                    fontSize: theme.fontSize.xs,
                                                    fontWeight: theme.fontWeight.light,
                                                    color: theme.palette.common.white,
                                                })}
                                            >
                                                {dateFormattingTxtFull(new Date(2022, 5, 10))}
                                            </Typography> */}
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Container maxWidth="md" sx={{ alignSelf: 'center' }}>
                <Stack>
                    {/* <Img
                        src={Image}
                        sx={(theme) => ({
                            borderRadius: theme.borderRadius.xs,
                        })}
                    /> */}
                    <Stack direction="row" gap={1.25} mt={1.25} flexWrap="wrap">
                        <Category category={'Projet'} />
                    </Stack>
                    <Stack spacing={3} my={5}>
                        <Typography
                            component="strong"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.xl,
                                fontWeight: theme.fontWeight.bold,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Programme MOURAFAKA
                        </Typography>

                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.md,
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Au cours d'une année mémorable, le SIL a mis en avant son Programme Mourafaka en choisissant 243 coopératives
                            variées, renforçant ainsi 1 996 membres, y compris 1 167 femmes. Mettant l'accent sur son engagement envers
                            l'égalité des genres, 79 de ces coopératives sont dirigées par des femmes et 15 par personnes à besoins
                            particuliers. Le programme a également maintenu son appui à 97 coopératives agricoles, dont 9 dirigées par des
                            femmes, ce qui représente 28,79% des secteurs couvertspar le programme. Ces coopératives sont basées dans les
                            régions de Rabat-Salé-Kénitra, Drâa-Tafilalet, Marrakech-Safi et Guelmim-Oued Noun.
                        </Typography>
                        <VideoPlayer videoId="_uc6H3bLKc8" />
                        <Typography
                            component="strong"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.xl,
                                fontWeight: theme.fontWeight.bold,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Transcender les frontières : Bien-être Environnemental dans le Parc National du Niokolo-Koba au Sénégal
                        </Typography>

                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.md,
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Ce projet s'est focalisé sur le diagnostic organisationnel et l'évaluation des capacités des femmes
                            bénéficiaires du projet GIE Dar Salam. Il s'agissait d'une évaluation organisationnelle participative de 50
                            femmes rurales, visant à renforcer leurs capacités techniques et managériales en matière de pratiques durables
                            et de conservation de l'environnement
                        </Typography>
                        <OwlCarousel className="owl-carousel owl-theme" {...options}>
                            {IMAGES.map((item) => (
                                <CardMedia
                                    image={item}
                                    sx={{
                                        height: 300,
                                        width: '98%',
                                    }}
                                />
                            ))}
                        </OwlCarousel>
                        <Typography
                            component="strong"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.md,
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Eléments clés de la stratégie du projet
                        </Typography>
                        <Box pt={3}>
                            <Grid container spacing={5}>
                                {STEPS.map((item) => (
                                    <Grid item md={6} sm={6} xs={12}>
                                        <Card
                                            sx={(theme) => ({
                                                position: 'relative',
                                                overflow: 'visible',
                                            })}
                                        >
                                            <Avatar
                                                variant="square"
                                                sx={(theme) => ({
                                                    boxShadow: theme.shadows.default,
                                                    backgroundColor: theme.palette.primary.dark,
                                                    fontSize: theme.fontSize['4xl'],
                                                    p: 1,
                                                    width: 40,
                                                    height: 40,
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    transform: 'translate(0, -50%)',
                                                    zIndex: 30,
                                                })}
                                            >
                                                <BsArrowRight />
                                            </Avatar>

                                            <Stack spacing={1} height="100%">
                                                <Typography
                                                    sx={(theme) => ({
                                                        textAlign: 'center',
                                                        fontWeight: theme.fontWeight.medium,
                                                        color: theme.palette.primary.main,
                                                        fontSize: theme.fontSize.sm,
                                                    })}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    sx={(theme) => ({
                                                        fontSize: theme.fontSize.xs,
                                                        fontWeight: theme.fontWeight.light,
                                                        color: theme.palette.secondary.dark,
                                                        textAlign: 'justify',
                                                    })}
                                                >
                                                    {item.description}
                                                </Typography>
                                            </Stack>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Typography
                            component="strong"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.xl,
                                fontWeight: theme.fontWeight.bold,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Célébrer les progrès de la collaboration : Le forum africain des coopératives
                        </Typography>

                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.md,
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            En juillet 2022, SIL-UM6P a organisé le forum africain des coopératives. Cet événement, qui marquait le 100e
                            anniversaire de la Journée internationale des coopératives, a rassemblé plus de 19 facilitateurs CEFE
                            expérimentés de diverses régions, dont le Mali, l'Allemagne, l'Algérie, le Togo, le Sénégal, les Pays-Bas et le
                            Cameroun. Le forum s'est concentré sur le partage et le développement de modèles et de pratiques coopératives
                            susceptibles d'améliorer la productivité et la durabilité de l'agriculture.
                        </Typography>

                        <Typography
                            component="strong"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.md,
                                fontWeight: theme.fontWeight.semibold,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Cérémonie de remise des prix "Génération Solidarité":
                        </Typography>

                        <Typography sx={{ pl: 3 }} component="ul">
                            <Typography
                                component="li"
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.md,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.black,
                                    lineHeight: 2,
                                })}
                            >
                                Présidé par le Ministre du Tourisme, de l'Artisanat, et de l'Economie Sociale du Maroc
                            </Typography>
                            <Typography
                                component="li"
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.md,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.black,
                                    lineHeight: 2,
                                })}
                            >
                                39 jeunes coopératives honorées ; 29 coopératives existantes et 10 porteurs de projets, 5 créées par des
                                citoyens de 4 pays africains
                            </Typography>
                        </Typography>

                        <Typography
                            component="strong"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.md,
                                fontWeight: theme.fontWeight.semibold,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Video Best of:
                        </Typography>
                        <VideoPlayer videoId="9Gi9H7IDqWA" />

                        <Typography
                            component="strong"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.xl,
                                fontWeight: theme.fontWeight.bold,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            Renforcement des capacités : Les initiatives 2022 du SIL-UM6P
                        </Typography>

                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontSize: theme.fontSize.md,
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                            })}
                        >
                            L'engagement du SIL-UM6P à favoriser le développement agricole est illustré par ses initiatives qui offrent une
                            formation et des ressources étendues aux agriculteurs et aux coopératives locales. Le SIL-UM6P exploite ses
                            installations, notamment ses salles de formation et ses ressources technologiques, et fait appel à ses équipes
                            d'experts et de consultants pour fournir une assistance technique et une formation spécialisées.
                        </Typography>

                        <OwlCarousel className="owl-carousel owl-theme" {...options}>
                            {IMAGES2.map((item) => (
                                <CardMedia
                                    image={item}
                                    sx={{
                                        height: 300,
                                        width: '98%',
                                    }}
                                />
                            ))}
                        </OwlCarousel>
                    </Stack>
                </Stack>
            </Container>
            <Footer />
        </Stack>
    );
};

export default NewsArticle;
