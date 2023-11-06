import Certification from '@/components/pages/About/Certification';
import Experience from '@/components/pages/About/Experience';
import Description from '@/components/pages/About/Description';

const About = () => {
    return (
        <div className='flex flex-col max-w-3xl p-8 mx-auto gap-y-16'>
            <Description />
            <Experience />
            <Certification />
        </div>
    );
};

export default About;
