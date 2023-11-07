import tToolMastery from '@/types/tToolMastery';

const toolsMastery: tToolMastery[] = [
    {
        name: 'Frontend',
        list: [
            {
                name: 'Framework',
                value: 'ReactJS, NextJS',
            },
            {
                name: 'Styling',
                value: 'VanillaCSS, SASS, TailwindCSS',
            },
            {
                name: 'State Management',
                value: 'Zustand',
            },
            {
                name: 'Unit Testing',
                value: 'Jest, RTL',
            },
            {
                name: 'Data Fetching',
                value: 'Fetch, Axios, SWR',
            },
        ],
    },
    {
        name: 'Backend',
        list: [
            {
                name: 'Framework',
                value: 'Laravel',
            },
            {
                name: 'Authentication',
                value: 'Sanctum',
            },
            {
                name: 'Feature Testing',
                value: 'PHPUnit',
            },
            {
                name: 'API Documentation',
                value: 'OpenAPI',
            },
        ],
    },
    {
        name: 'Others',
        list: [
            {
                name: 'Version Control & Remote Repository',
                value: 'Git, Github',
            },
            {
                name: 'Containerization',
                value: 'Docker',
            },
            {
                name: 'Design Tool',
                value: 'Figma, Inkscape',
            },
        ],
    },
];

export default toolsMastery;
