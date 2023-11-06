type tCertificate = {
    title: string;
    provider: string;
    time: string;
    description: string;
    links?: {
        name: string;
        url: string;
    }[];
};

export default tCertificate;
