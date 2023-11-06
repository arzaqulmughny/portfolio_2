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
                a 20-year-old enthusiast with a strong passion for the world of web development. As a recent graduate, I
                {"'"}ve taken the self-taught route and successfully crafted dynamic web applications from scratch.{' '}
            </P>
        </div>
    );
};

export default Intro;
