import About from '@/components/pages/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me',
};

const Page = () => {
    return <About />;
};

export default Page;
