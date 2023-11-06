import ProjectItem from '@/shared/components/ProjectItem';
import { Button } from '@/components/ui/button';
import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import projects from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ProjectList from '@/shared/components/ProjectList';

const Projects = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <div className='flex flex-col gap-y-4'>
                <H2>Projects</H2>
                <P className='text-primary/80'>What have i made</P>
            </div>
            <ProjectList
                data={projects}
                limit={2}
            />

            <Link href='/projects'>
                <Button
                    variant={'secondary'}
                    className='w-full'
                >
                    More projects <ArrowUpRight className='w-4 ml-1' />
                </Button>
            </Link>
        </div>
    );
};

export default Projects;
