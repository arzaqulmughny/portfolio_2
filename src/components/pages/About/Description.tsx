import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';

const Description = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H2>About Me</H2>
            <P className='text-primary/80'>
                A 20 years old web developer with expertise as a front-end and backend technologies. creating visually
                appealing and highly functional websites. With a keen eye for detail and a commitment to delivering high
                quality work,
            </P>
        </div>
    );
};

export default Description;
