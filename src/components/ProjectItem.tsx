import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import H3 from './ui/typography/h3';
import P from './ui/typography/p';
import tProject from '@/types/tProject';
import Link from 'next/link';
import Image from 'next/image';

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
                <Link
                    className='flex items-center'
                    href={`projects/${data.slug}`}
                >
                    Details
                    <ArrowRight className='w-4 ml-1' />
                </Link>
            </Button>
        </div>
    );
};

export default ProjectItem;
