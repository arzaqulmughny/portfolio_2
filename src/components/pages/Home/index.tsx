import Repositories from '@/components/pages/Home/Repositories';
import Projects from '@/components/pages/Home/Projects';
import Intro from '@/components/pages/Home/Intro';

const Home = () => {
    return (
        <div className='flex flex-col max-w-3xl p-8 mx-auto gap-y-16'>
            <Intro />
            <Projects />
            <Repositories />
        </div>
    );
};

export default Home;
