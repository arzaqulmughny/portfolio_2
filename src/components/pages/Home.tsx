'use client';

import ProjectItem from '@/components/ProjectItem';
import ProjectList from '@/components/ProjectList';
import RepositorySection from '@/components/RepositorySection';
import { Button } from '@/components/ui/button';
import H1 from '@/components/ui/typography/h1';
import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export const metadata: Metadata = {
    title: 'Arza Portfolio',
};

const Home = () => {
    return (
        <div className='flex flex-col max-w-3xl p-8 mx-auto gap-y-16'>
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
                    a 20-year-old enthusiast with a strong passion for the world of web development. As a recent
                    graduate, I{"'"}ve taken the self-taught route and successfully crafted dynamic web applications
                    from scratch.{' '}
                </P>
            </div>

            <div className='flex flex-col gap-y-10'>
                <div className='flex flex-col gap-y-4'>
                    <H2>Projects</H2>
                    <P className='text-primary/80'>What have i made</P>
                </div>

                <ProjectList />
                <Button
                    variant={'secondary'}
                    className='self-center w-full'
                >
                    <Link
                        className='flex items-center'
                        href='/projects'
                    >
                        More projects <ArrowUpRight className='w-4 ml-1' />
                    </Link>
                </Button>
            </div>

            <RepositorySection />
        </div>
    );
};

export default Home;
