import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';

const Description = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H2>About Me</H2>
            <P className='text-primary/80'>
                A self-taught web developer, who is looking for opportunities to work, has a project-based virtual
                internship experience for one month and has created several complete web applications from the design
                part to the frontend and backend development stages
            </P>
        </div>
    );
};

export default Description;
