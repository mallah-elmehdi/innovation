import COMMUNITY_BUILDING from '../assets/landing/activities/COMMUNITY_BUILDING.png';
import KNOWLEDGE_MANAGEMENT from '../assets/landing/activities/KNOWLEDGE_MANAGEMENT.png';
import RESEARCH from '../assets/landing/activities/RESEARCH.png';
import SCALING_UP from '../assets/landing/activities/SCALING_UP.png';
import TRAINING from '../assets/landing/activities/TRAINING.png';
// ---
import { BsBoxes, BsFillPeopleFill, BsRocketTakeoffFill, BsSearch } from 'react-icons/bs';
import COMMUNITY_BUILDING_IMAGE from '../assets/landing/activities/COMMUNITY_BUILDING.jpg';
import KNOWLEDGE_MANAGEMENT_IMAGE from '../assets/landing/activities/KNOWLEDGE_MANAGEMENT.jpg';
import RESEARCH_IMAGE from '../assets/landing/activities/RESEARCH.jpg';
import SCALING_UP_IMAGE from '../assets/landing/activities/SCALING_UP.jpg';
import TRAINING_IMAGE from '../assets/landing/activities/TRAINING.jpg';
// ---
import CO_DEFINITION from '../assets/landing/methodologie/co-definition.jpg';
import CONSTITUTION_D_EQUIPES from '../assets/landing/methodologie/constitution-d-equipes.jpg';
import CO_CONSTRUCTION from '../assets/landing/methodologie/co-construction.jpg';
import PERENNISATION from '../assets/landing/methodologie/perennisation.jpg';

export const ACTIVITIES = [
    {
        icon: TRAINING,
        image: TRAINING_IMAGE,
        title: 'TRAINING',
        description: 'Formation et renforcement des capacités',
    },
    {
        icon: RESEARCH,
        image: RESEARCH_IMAGE,
        title: 'RESEARCH',
        description: 'Recherche et développement',
    },
    {
        icon: COMMUNITY_BUILDING,
        image: COMMUNITY_BUILDING_IMAGE,
        title: 'COMMUNITY BUILDING',
        description: "Partage du savoir-faire et d'expertise",
    },
    {
        icon: SCALING_UP,
        image: SCALING_UP_IMAGE,
        title: 'SCALING UP',
        description: 'Accompagnement et business développement',
    },
    {
        icon: KNOWLEDGE_MANAGEMENT,
        image: KNOWLEDGE_MANAGEMENT_IMAGE,
        title: 'KNOWLEDGE MANAGEMENT',
        description: 'Gestion stratégique et capitalisation des connaissances',
    },
];

export const STATS = [
    {
        number: 26,
        title: 'Projets pilotes lancés',
    },
    {
        number: 8,
        title: 'Projets implémentés',
    },
    {
        number: 32,
        title: 'Partenaires',
    },
];

export const METODOLOGIE = [
    {
        title: 'co-définition',
        description:
            "On s'engage à travailler en étroite collaboration avec les communautés locales et les parties prenantes impliquées en adoptant une approche participative pour identifier et comprendre les besoins spécifiques de la communauté concernée et ainsi définir les challenges à relever",
        icon: <BsSearch />,
        image: CO_DEFINITION,
    },
    {
        title: "constitution d'équipes",
        description:
            "On s'engage à rassembler des personnes aux compétences variées qui peuvent aborder les problèmes sous différents angles, ce qui favorise l'émergence d'idées novatrices et de solutions holistiques.",
        icon: <BsFillPeopleFill />,
        image: CONSTITUTION_D_EQUIPES,
    },
    {
        title: 'co-construction',
        description:
            "On s'engage à travailler en collaboration avec les parties prenantes et les communautés pour développer des solutions novatrices et disruptives ayant un impact significatif sur le développement territorial. Ces solutions vont au-delà des approches traditionnelles et visent à provoquer des changements significatifs dans le développement socio-économique.",
        icon: <BsBoxes />,
        image: CO_CONSTRUCTION,
    },
    {
        title: 'pérennisation',
        description:
            "Il ne s'agit pas seulement de mettre en place des solutions à court terme, mais aussi de garantir que les actions et les projets initiés continuent de produire des résultats positifs à long terme. Cela implique la création de mécanismes durables, l'engagement continu avec les communautés et les parties prenantes, et la mise en place de stratégies pour maintenir l'efficacité des solutions sur le long terme. L'objectif est de créer un impact qui perdure au-delà de la durée initiale du projet.",
        icon: <BsRocketTakeoffFill />,
        image: PERENNISATION,
    },
];
