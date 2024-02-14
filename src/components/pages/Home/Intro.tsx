'use client';
import H1 from '@/components/ui/typography/h1';
import P from '@/components/ui/typography/p';
import Typewriter from 'typewriter-effect';

const Intro = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H1 className='whitespace-pre-line'>Hello,</H1>
            <H1 className='flex whitespace-break-spaces -z-10'>
                {`I'm `}
                <Typewriter
                    options={{ loop: true, strings: ['Arza', 'Web Developer'], autoStart: true }}
                    onInit={(typewriter) => {
                        typewriter.start();
                    }}
                />
            </H1>

            <P className='text-justify'>
                A 20 years old web developer with expertise as a front-end and backend technologies. creating visually
                appealing and highly functional websites. With a keen eye for detail and a commitment to delivering high
                quality work.
            </P>
        </div>
    );
};

export default Intro;
