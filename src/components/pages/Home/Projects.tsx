import { Button } from '@/components/ui/button';
import H2 from '@/components/ui/typography/h2';
import H3 from '@/components/ui/typography/h3';
import P from '@/components/ui/typography/p';
import projects from '@/data/projects';
import tProject from '@/types/tProject';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface IProjectItemProps {
    data: tProject;
}

const ProjectItem = (props: IProjectItemProps) => {
    const { data } = props;

    return (
        <div className='flex flex-col gap-y-8'>
            <div className='relative overflow-hidden rounded-md -z-10 w-sm aspect-video'>
                <Image
                    src={`/assets/images/${data.thumbnail}`}
                    alt={`${data.title}`}
                    fill
                />
            </div>
            <div className='flex flex-col gap-y-4'>
                <H3>{data.title}</H3>
                <P className='line-clamp-3 text-primary/80'>{data.summary}</P>
            </div>
            <Button
                variant={'outline'}
                className='self-end w-fit'
            >
                <a
                    className='flex items-center'
                    href={data.url}
                    target='_blank'
                >
                    Details
                    <ArrowRight className='w-4 ml-1' />
                </a>
            </Button>
        </div>
    );
};

type TProjectListProps = {
    data: tProject[];
};

const ProjectList = (props: TProjectListProps) => {
    const { data } = props;

    return (
        <div className='flex flex-col gap-8 sm:block sm:columns-2'>
            {data.slice(0, 2).map((project, index) => (
                <ProjectItem
                    data={project}
                    key={`project-${index}`}
                />
            ))}
        </div>
    );
};

const Projects = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <div className='flex flex-col gap-y-4'>
                <H2>Projects</H2>
                <P className='text-primary/80'>What have i made</P>
            </div>
            <ProjectList data={projects} />
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
    );
};

export default Projects;
