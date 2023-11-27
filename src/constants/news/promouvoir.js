import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Card } from '../../components';
import { BsArrowRight } from 'react-icons/bs';
import AuthorSIL from '../../assets/news/authors/sil.png';
// -------- IMAGES
import ImagePromouvoir from '../../assets/news/promouvoir.png';
import ImagePromouvoir1 from '../../assets/news/promouvoir/1.JPG';
import ImagePromouvoir2 from '../../assets/news/promouvoir/2.JPG';
import ImagePromouvoir3 from '../../assets/news/promouvoir/3.JPG';
import ImagePromouvoir4 from '../../assets/news/promouvoir/4.JPG';
import ImagePromouvoir5 from '../../assets/news/promouvoir/5.jpg';
import ImagePromouvoir10 from '../../assets/news/promouvoir/10.jpg';
import ImagePromouvoir11 from '../../assets/news/promouvoir/11.JPG';
import ImagePromouvoir12 from '../../assets/news/promouvoir/12.jpg';
import ImagePromouvoir13 from '../../assets/news/promouvoir/13.jpg';
import ImagePromouvoir14 from '../../assets/news/promouvoir/14.JPG';
import ImagePromouvoir15 from '../../assets/news/promouvoir/15.jpg';
import ImagePromouvoir16 from '../../assets/news/promouvoir/16.jpg';
import ImagePromouvoir17 from '../../assets/news/promouvoir/17.jpg';
import ImagePromouvoir6 from '../../assets/news/promouvoir/6.JPG';
import ImagePromouvoir7 from '../../assets/news/promouvoir/7.jpg';
import ImagePromouvoir9 from '../../assets/news/promouvoir/9.jpg';

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

export const promouvoir = {
    image: {
        is_active: false,
        src: ImagePromouvoir,
    },
    title: 'Promouvoir la Croissance Inclusive et la Durabilité en Agriculture : Sélection des Moments Clés du SIL 2022',
    slug: 'promouvoir-la-croissance-inclusive-et-la-durabilite-en-agriculture-selection-des-moments-cles-du',
    author: {
        name: 'SOCIAL INNOVATION LAB',
        image: AuthorSIL,
    },
    date: new Date(2022, 7, 10),
    category: 'Projet',
    content: [
        {
            tag: 'h3',
            size: 'xl',
            style: 'bold',
            text: 'Programme MOURAFAKA',
        },
        {
            tag: 'span',
            size: 'md',
            style: 'light',
            text: "Au cours d'une année mémorable, le SIL a mis en avant son Programme Mourafaka en choisissant 243 coopératives variées, renforçant ainsi 1 996 membres, y compris 1 167 femmes. Mettant l'accent sur son engagement envers l'égalité des genres, 79 de ces coopératives sont dirigées par des femmes et 15 par personnes à besoins particuliers. Le programme a également maintenu son appui à 97 coopératives agricoles, dont 9 dirigées par des femmes, ce qui représente 28,79% des secteurs couvertspar le programme. Ces coopératives sont basées dans les régions de Rabat-Salé-Kénitra, Drâa-Tafilalet, Marrakech-Safi et Guelmim-Oued Noun.",
        },
        {
            is_video: true,
            id: '_uc6H3bLKc8',
        },
        {
            tag: 'h3',
            size: 'xl',
            style: 'bold',
            text: 'Transcender les frontières : Bien-être Environnemental dans le Parc National du Niokolo-Koba au Sénégal',
        },
        {
            tag: 'span',
            size: 'md',
            style: 'light',
            text: "Ce projet s'est focalisé sur le diagnostic organisationnel et l'évaluation des capacités des femmes bénéficiaires du projet GIE Dar Salam. Il s'agissait d'une évaluation organisationnelle participative de 50 femmes rurales, visant à renforcer leurs capacités techniques et managériales en matière de pratiques durables et de conservation de l'environnement",
        },
        {
            is_slider: true,
            images: [ImagePromouvoir1, ImagePromouvoir2, ImagePromouvoir3, ImagePromouvoir4, ImagePromouvoir5],
        },
        {
            tag: 'span',
            size: 'md',
            style: 'semibold',
            text: 'Eléments clés de la stratégie du projet',
        },
        {
            is_unique: true,
            element: (
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
            ),
        },
        {
            tag: 'h3',
            size: 'xl',
            style: 'bold',
            text: 'Célébrer les progrès de la collaboration : Le forum africain des coopératives',
        },
        {
            tag: 'span',
            size: 'md',
            style: 'light',
            text: "En juillet 2022, SIL-UM6P a organisé le forum africain des coopératives. Cet événement, qui marquait le 100e anniversaire de la Journée internationale des coopératives, a rassemblé plus de 19 facilitateurs CEFE expérimentés de diverses régions, dont le Mali, l'Allemagne, l'Algérie, le Togo, le Sénégal, les Pays-Bas et le Cameroun. Le forum s'est concentré sur le partage et le développement de modèles et de pratiques coopératives susceptibles d'améliorer la productivité et la durabilité de l'agriculture.",
        },
        {
            tag: 'span',
            size: 'md',
            style: 'semibold',
            text: 'Cérémonie de remise des prix "Génération Solidarité":',
        },
        {
            is_list: true,
            tag: 'ul',
            elements: [
                {
                    tag: 'span',
                    size: 'md',
                    style: 'light',
                    text: "Présidé par le Ministre du Tourisme, de l'Artisanat, et de l'Economie Sociale du Maroc",
                },
                {
                    tag: 'span',
                    size: 'md',
                    style: 'light',
                    text: '39 jeunes coopératives honorées ; 29 coopératives existantes et 10 porteurs de projets, 5 créées par des citoyens de 4 pays africains',
                },
            ],
        },
        {
            tag: 'span',
            size: 'md',
            style: 'semibold',
            text: 'Video Best of:',
        },
        {
            is_video: true,
            id: '9Gi9H7IDqWA',
        },
        {
            tag: 'h3',
            size: 'xl',
            style: 'bold',
            text: 'Renforcement des capacités : Les initiatives 2022 du SIL-UM6P',
        },
        {
            tag: 'span',
            size: 'md',
            style: 'light',
            text: "L'engagement du SIL-UM6P à favoriser le développement agricole est illustré par ses initiatives qui offrent une formation et des ressources étendues aux agriculteurs et aux coopératives locales. Le SIL-UM6P exploite ses installations, notamment ses salles de formation et ses ressources technologiques, et fait appel à ses équipes d'experts et de consultants pour fournir une assistance technique et une formation spécialisées.",
        },
        {
            is_slider: true,
            images: [
                ImagePromouvoir10,
                ImagePromouvoir11,
                ImagePromouvoir12,
                ImagePromouvoir13,
                ImagePromouvoir14,
                ImagePromouvoir15,
                ImagePromouvoir16,
                ImagePromouvoir17,
                ImagePromouvoir6,
                ImagePromouvoir7,
                ImagePromouvoir9,
            ],
        },
    ],
};
