export const NAVBAR_SECTIONS = {
    visionAndMission: 'vision-and-missions',
    activities: 'activities',
    innovationInNumbers: 'innovation-in-numbers',
    ourMethodology: 'our-methodology',
    team: 'our-team',
};

export const NAVBAR = [
    {
        title: 'About us',
        id: 'about-us',
        menu: [
            {
                title: 'Vision and Mission',
                id: NAVBAR_SECTIONS.visionAndMission,
            },
            {
                title: 'Activities',
                id: NAVBAR_SECTIONS.activities,
            },
            {
                title: 'Innovation in Numbers',
                id: NAVBAR_SECTIONS.innovationInNumbers,
            },
        ],
    },
    {
        title: 'Methodology',
        id: NAVBAR_SECTIONS.ourMethodology,
    },
    {
        title: 'Team',
        id: NAVBAR_SECTIONS.team,
    },
];
