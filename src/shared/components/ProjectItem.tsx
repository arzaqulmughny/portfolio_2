import { Button } from '@/components/ui/button';
import H3 from '@/components/ui/typography/h3';
import P from '@/components/ui/typography/p';
import tProject from '@/types/tProject';
import { ArrowRight } from 'lucide-react';
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
                <P className='h-[90px] line-clamp-3 text-primary/80'>{data.summary}</P>
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

export default ProjectItem;
