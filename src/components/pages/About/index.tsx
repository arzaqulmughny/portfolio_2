import Certification from '@/components/pages/About/Certification';
import Experience from '@/components/pages/About/Experience';
import Description from '@/components/pages/About/Description';
import Skills from './Skills';
import ToolMastery from './ToolMastery';
import Education from './Education';
import Contact from './Contact';

const About = () => {
    return (
        <div className='flex flex-col max-w-3xl p-8 mx-auto gap-y-16'>
            <Description />
            <Experience />
            <Certification />
            <Skills />
            <ToolMastery />
            <Education />
            <Contact />
        </div>
    );
};

export default About;
