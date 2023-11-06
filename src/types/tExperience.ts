type tExperience = {
    position: string;
    company: string;
    title?: string;
    time: string;
    duration: string;
    description: string;
    links?: {
        name: string;
        url: string;
    }[];
};

export default tExperience;
