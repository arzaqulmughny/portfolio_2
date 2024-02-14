import tExperience from '@/types/tExperience';

const experiences: tExperience[] = [
    {
        position: 'Full Time',
        company: 'PT Xeno Persada Teknologi',
        title: 'Front End Web Developer',
        time: 'January 2024',
        duration: 'Present',
        description: 'Converting existing html,css and javascript (jquery) template into NextJS, Slicing UI design',
    },
    {
        position: 'Internship',
        company: 'Core Initiative',
        title: 'Project-Based Virtual Intern : Front End Developer Core Initiative x Rakamin Academy',
        time: 'September 2023',
        duration: '1 Month',
        description:
            'Complete several tasks related to being a Front End Web Developer such as creating a website that uses data from restful api and using commonly used tools such as Docker as a development environment.',
        links: [
            {
                name: 'Final Project',
                url: 'https://github.com/zaarza/ecommerce-catalog',
            },
        ],
    },
];

export default experiences;
